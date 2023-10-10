import { staffQuery } from './queries.js'
import { fetchAl, pipeToFile } from './util.js'

async function * fetchStaff (page = 0) {
  let hasNextPage = true
  for (let i = page; hasNextPage; ++i) {
    console.log(`Loading page ${i + 1}...`)
    const media = await fetchAl({
      query: staffQuery,
      variables: {
        fucktaluun0: i * 18 + 1,
        fucktaluun1: i * 18 + 2,
        fucktaluun2: i * 18 + 3,
        fucktaluun3: i * 18 + 4,
        fucktaluun4: i * 18 + 5,
        fucktaluun5: i * 18 + 6,
        fucktaluun6: i * 18 + 7,
        fucktaluun7: i * 18 + 8,
        fucktaluun8: i * 18 + 9,
        fucktaluun9: i * 18 + 10,
        fucktaluun10: i * 18 + 11,
        fucktaluun11: i * 18 + 12,
        fucktaluun12: i * 18 + 13,
        fucktaluun13: i * 18 + 14,
        fucktaluun14: i * 18 + 15,
        fucktaluun15: i * 18 + 16,
        fucktaluun16: i * 18 + 17,
        fucktaluun17: i * 18 + 18
      }
    })

    console.log(`Loaded ${media.length} items. Saving...`)

    hasNextPage = media.length === 900

    yield media
  }
}

export default () => pipeToFile(fetchStaff(), './staff.json')
