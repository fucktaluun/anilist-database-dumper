import { createWriteStream } from 'fs'
import Bottleneck from 'bottleneck'

const sleep = (/** @type {number} */ t) => new Promise(resolve => setTimeout(resolve, t))

const limiter = new Bottleneck({
  reservoir: 90,
  reservoirRefreshAmount: 90,
  reservoirRefreshInterval: 60 * 1000,
  maxConcurrent: 10,
  minTime: 100
})

let rateLimit = null

async function setRateLimit (time) {
  if (rateLimit) return
  rateLimit = sleep(time)
  await rateLimit
  rateLimit = null
}

limiter.on('failed', async err => {
  console.warn(err)

  if (!err.headers) {
    setRateLimit(61 * 1000)
    return 61 * 1000
  }
  const time = ((err.headers.get('retry-after') || 60) + 1) * 1000
  setRateLimit(time)
  return time
})

const wrapped = limiter.wrap(async body => {
  await rateLimit
  let res = {}
  try {
    res = await fetch('https://graphql.anilist.co', {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  } catch (err) {
    if (!res || res.status !== 404) throw err
  }
  if (res.status === 429) throw res
  let json = null
  try {
    json = await res.json()
  } catch (err) {
    console.error(err)
  }
  if (!res.ok) {
    if (json?.errors) {
      for (const err of json?.errors) {
        console.error(err)
      }
    } else {
      console.error(res)
    }
  }
  return json
})

/**
 * @param {object} body
 */
export async function fetchAl (body) {
  const json = await wrapped(JSON.stringify(body))
  return Object.values(json.data).flatMap(item => Object.values(item)[0])
}

/**
 * @param {AsyncGenerator<any[], void, unknown>} iterator
 * @param {import("fs").PathLike} fileName
 */
export async function pipeToFile (iterator, fileName) {
  const stream = createWriteStream(fileName, { flags: 'a' })
  stream.write('[')
  for await (const result of iterator) {
    stream.write(JSON.stringify(result).slice(1, -1))
  }
  stream.write(']')

  stream.end()
}
