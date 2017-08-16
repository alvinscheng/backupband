import { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow } from './drums.js'
import store from '../store'

const drumConfig = [
  {
    1: { crossStick },
    2: { crossStick },
    3: { crossStick },
    4: { crossStick }
  },
  {
    1: { kick },
    2: { kick },
    3: { kick },
    4: { kick }
  },
  {
    1: { kick },
    2: { kick, snare },
    3: { kick },
    4: { kick, snare }
  },
  {
    1: { kick, hiHatOpen },
    2: { kick, snare, hiHatOpen },
    3: { kick, hiHatOpen },
    4: { kick, snare, hiHatOpen }
  },
  {
    1: { kick, crash },
    2: { kick, snare, hiHatOpen },
    3: { kick, hiHatOpen },
    4: { kick, snare, hiHatOpen }
  }
]

function beat(metro) {
  let intensity = metro.args.intensity
  let beat = metro.args.beat
  console.log(drumConfig[intensity][beat])
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: beat, intensity: intensity }
  })
  drumConfig[intensity][beat].forEach(drum => {
    drum.play()
  })
}

function beatOne(metro) {
  let intensity = metro.args.intensity
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 1, intensity: intensity }
  })
  switch (intensity) {
    case 0:
      crossStick.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      break
    case 3:
      kick.play()
      hiHatOpen.play()
      break
    case 4:
      kick.play()
      crash.play()
  }
}

function beatTwo(metro) {
  let intensity = metro.args.intensity
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 2, intensity: intensity }
  })
  switch (intensity) {
    case 0:
      crossStick.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      snare.play()
      break
    case 3:
      kick.play()
      snare.play()
      hiHatOpen.play()
      break
    case 4:
      kick.play()
      snare.play()
      hiHatOpen.play()
  }
}

function beatThree(metro) {
  let intensity = metro.args.intensity
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 3, intensity: intensity }
  })
  switch (intensity) {
    case 0:
      crossStick.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      break
    case 3:
      kick.play()
      hiHatOpen.play()
      break
    case 4:
      kick.play()
      hiHatOpen.play()
  }
}

function beatFour(metro) {
  let intensity = metro.args.intensity
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 4, intensity: intensity }
  })
  switch (intensity) {
    case 0:
      crossStick.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      snare.play()
      break
    case 3:
      kick.play()
      snare.play()
      hiHatOpen.play()
      break
    case 4:
      kick.play()
      snare.play()
      hiHatOpen.play()
  }
}

module.exports = { beat }
