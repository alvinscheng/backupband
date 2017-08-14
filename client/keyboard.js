import { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow } from './drums.js'
import { runMetro, intensityUp, intensityDown } from './metronome.js'

export default function keyboard(keyed) {
  let key = keyed.keyCode
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
      break
    case 32: runMetro()
      keyed.preventDefault()
      break
    case 78: intensityUp()
      break
    case 86: intensityDown()
  }
}
