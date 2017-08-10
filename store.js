import { createStore } from 'redux'

const initialState = { beat: 1, intensity: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'BEAT_CHANGE':
      return { beat: action.payload.beat, intensity: action.payload.intensity }
    default: return state
  }
}

const store = createStore(reducer, initialState)

export default store
