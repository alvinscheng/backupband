import { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow } from './drums.js'
import { runMetro, intensityUp, intensityDown, setIntensity, upTempo, downTempo } from './metronome.js'

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
    case 13: runMetro()
      break
    case 32: runMetro()
      keyed.preventDefault()
      break
    case 78:
    case 39: intensityUp()
      keyed.preventDefault()
      break
    case 86:
    case 37: intensityDown()
      break
    case 107:
    case 38: upTempo()
      keyed.preventDefault()
      break
    case 109:
    case 40: downTempo()
      keyed.preventDefault()
      break
    case 48: setIntensity(0)
      break
    case 49: setIntensity(1)
      break
    case 52: setIntensity(2)
      break
    case 55: setIntensity(3)
      break
    case 12: setIntensity(4)
  }
}
