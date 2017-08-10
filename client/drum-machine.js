import { sideStick, kick, snare, hiHat, crash, tomHi, tomMed } from './drums.js'

export default function playDrums(key) {
  switch (key) {
    case 70: kick.play()
      break
    case 74: snare.play()
      break
    case 69: hiHat.play()
      break
    case 87: crash.play()
      break
    case 73: tomHi.play()
      break
    case 79: tomMed.play()
      break
    case 81: sideStick.play()
  }
}
