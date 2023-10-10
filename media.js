import { mediaQuery } from './queries.js'
import { fetchAl, pipeToFile } from './util.js'

async function * fetchMedia (page = 0) {
  let hasNextPage = true
  for (let i = page; hasNextPage; ++i) {
    console.log(`Loading page ${i + 1}...`)
    const media = await fetchAl({
      query: mediaQuery,
      variables: {
        fucktaluun0: i * 8 + 1,
        fucktaluun1: i * 8 + 2,
        fucktaluun2: i * 8 + 3,
        fucktaluun3: i * 8 + 4,
        fucktaluun4: i * 8 + 5,
        fucktaluun5: i * 8 + 6,
        fucktaluun6: i * 8 + 7,
        fucktaluun7: i * 8 + 8
      }
    })

    console.log(`Loaded ${media.length} items. Saving...`)

    hasNextPage = media.length === 400

    yield media
  }
}

export default () => pipeToFile(fetchMedia(), './media.json')
