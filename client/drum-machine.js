import { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow } from './drums.js'

export default function playDrums(key) {
  switch (key) {
    case 82: crossStick.play()
      break
    case 85: clap.play()
      break
    case 70: kick.play()
      break
    case 74: snare.play()
      break
    case 69: hiHatPedal.play()
      break
    case 87: hiHatOpen.play()
      break
    case 81: crash.play()
      break
    case 73: tomHi.play()
      break
    case 79: tomMed.play()
      break
    case 80: tomLow.play()
  }
}
