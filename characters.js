import { characterQuery } from './queries.js'
import { fetchAl, pipeToFile } from './util.js'

async function * fetchCharacters (page = 0) {
  let hasNextPage = true
  for (let i = page; hasNextPage; ++i) {
    console.log(`Loading page ${i + 1}...`)
    const media = await fetchAl({
      query: characterQuery,
      variables: {
        fucktaluun0: i * 23 + 1,
        fucktaluun1: i * 23 + 2,
        fucktaluun2: i * 23 + 3,
        fucktaluun3: i * 23 + 4,
        fucktaluun4: i * 23 + 5,
        fucktaluun5: i * 23 + 6,
        fucktaluun6: i * 23 + 7,
        fucktaluun7: i * 23 + 8,
        fucktaluun8: i * 23 + 9,
        fucktaluun9: i * 23 + 10,
        fucktaluun10: i * 23 + 11,
        fucktaluun11: i * 23 + 12,
        fucktaluun12: i * 23 + 13,
        fucktaluun13: i * 23 + 14,
        fucktaluun14: i * 23 + 15,
        fucktaluun15: i * 23 + 16,
        fucktaluun16: i * 23 + 17,
        fucktaluun17: i * 23 + 18,
        fucktaluun18: i * 23 + 19,
        fucktaluun19: i * 23 + 20,
        fucktaluun20: i * 23 + 21,
        fucktaluun21: i * 23 + 22,
        fucktaluun22: i * 23 + 23
      }
    })

    console.log(`Loaded ${media.length} items. Saving...`)

    hasNextPage = media.length === 1150

    yield media
  }
}

await pipeToFile(fetchCharacters(), './characters.json')
