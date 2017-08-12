import { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow } from './drums.js'
import store from '../store'

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

module.exports = { beatOne, beatTwo, beatThree, beatFour }
