import { createStore, combineReducers } from 'redux'

function tempo(state = {beat: 1, intensity: 0, nextIntensity: 0}, action) {
  switch (action.type) {
    case 'BEAT_CHANGE':
      return {
        beat: action.payload.beat,
        intensity: action.payload.intensity,
        nextIntensity: state.nextIntensity
      }
    case 'INTENSITY_CHANGE':
      return {
        beat: state.beat,
        intensity: state.intensity,
        nextIntensity: action.payload.nextIntensity
      }
    case 'INTENSITY_CHANGE_ON_STOP':
      return {
        beat: state.beat,
        intensity: action.payload.intensity,
        nextIntensity: action.payload.nextIntensity
      }
    default: return state
  }
}

function coordinates(state = {}, action) {
  switch (action.type) {
    case 'CRASH':
      return Object.assign({}, {x: 23.3, y: 39.4, height: 11.5, width: 4})
    case 'HIGH_HAT_OPEN':
      return Object.assign({}, {x: 28, y: 39.5, height: 11.4, width: 4})
    case 'HIGH_HAT_PEDAL':
      return Object.assign({}, {x: 32.7, y: 39.6, height: 11.4, width: 4})
    case 'CROSS_STICK':
      return Object.assign({}, {x: 37.4, y: 39.5, height: 11.4, width: 4})
    case 'CLAP':
      return Object.assign({}, {x: 51.6, y: 39.5, height: 11.4, width: 3.9})
    case 'HIGH_TOM':
      return Object.assign({}, {x: 56.24, y: 39.5, height: 11.4, width: 4})
    case 'MED_TOM':
      return Object.assign({}, {x: 60.9, y: 39.5, height: 11.4, width: 4})
    case 'LOW_TOM':
      return Object.assign({}, {x: 65.6, y: 39.5, height: 11.4, width: 4})
    case 'KICK':
      return Object.assign({}, {x: 38.6, y: 52.9, height: 11.4, width: 4})
    case 'SNARE':
      return Object.assign({}, {x: 52.7, y: 52.9, height: 11.4, width: 4})
    case 'INTENSITY_DOWN':
      return Object.assign({}, {x: 40.9, y: 66.3, height: 11.4, width: 4})
    case 'INTENSITY_UP':
      return Object.assign({}, {x: 50.4, y: 66.3, height: 11.4, width: 4})
    case 'METRONOME':
      return Object.assign({}, {x: 36.3, y: 79.7, height: 13.4, width: 22.72})
    case 'INTENSITY_DOWN_TWO':
      return Object.assign({}, {x: 30, y: 18.7, height: 30, width: 30})
    case 'TEMPO_UP':
      return Object.assign({}, {x: 75, y: 79.8, height: 6.4, width: 4})
    case 'TEMPO_DOWN':
      return Object.assign({}, {x: 75, y: 86.4, height: 6.4, width: 4})
    case 'INTENSITY_UP_TWO':
      return Object.assign({}, {x: 40, y: 48.7, height: 30, width: 30})
    default:
      return state
  }
}

const store = createStore(combineReducers({
  tempo: tempo,
  coordinates: coordinates,
  keys: false
}))

export default store
