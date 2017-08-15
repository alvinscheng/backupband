import { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow } from './drums.js'
import { runMetro, intensityUp, intensityDown, setIntensity, upTempo, downTempo } from './metronome.js'
import store from '../store'

export default function keyboard(keyed) {
  let key = keyed.keyCode
  switch (key) {
    case 82: crossStick.play()
      store.dispatch({type: 'CROSS_STICK'})
      break
    case 85: clap.play()
      store.dispatch({type: 'CLAP'})
      break
    case 70: kick.play()
      store.dispatch({type: 'KICK'})
      break
    case 74: snare.play()
      store.dispatch({type: 'SNARE'})
      break
    case 69: hiHatPedal.play()
      store.dispatch({type: 'HIGH_HAT_PEDAL'})
      break
    case 87: hiHatOpen.play()
      store.dispatch({type: 'HIGH_HAT_OPEN'})
      break
    case 81: crash.play()
      store.dispatch({type: 'CRASH'})
      break
    case 73: tomHi.play()
      store.dispatch({type: 'HIGH_TOM'})
      break
    case 79: tomMed.play()
      store.dispatch({type: 'MED_TOM'})
      break
    case 80: tomLow.play()
      store.dispatch({type: 'LOW_TOM'})
      break
    case 13: runMetro()
      store.dispatch({type: 'METRONOME'})
      break
    case 32: runMetro()
      store.dispatch({type: 'METRONOME'})
      keyed.preventDefault()
      break
    case 78:
    case 39: intensityUp()
      store.dispatch({type: 'INTENSITY_UP'})
      keyed.preventDefault()
      break
    case 86:
    case 37: intensityDown()
      store.dispatch({type: 'INTENSITY_DOWN'})
      break
    case 107:
    case 38: upTempo()
      store.dispatch({type: 'TEMPO_UP'})
      keyed.preventDefault()
      break
    case 109:
    case 40: downTempo()
      store.dispatch({type: 'TEMPO_DOWN'})
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
