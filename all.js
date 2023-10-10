import characters from './characters.js'
import media from './media.js'
import staff from './staff.js'
import studios from './studios.js'

await Promise.all([
  characters(),
  media(),
  staff(),
  studios()
])
