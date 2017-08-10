import { sideStick, kick, snare, hiHat, crash, tomHi, tomMed } from './drums/drums.js'
import store from '../store'

function beatOne(metro) {
  let intensity = metro.args.intensity
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 1, intensity: intensity }
  })
  switch (intensity) {
    case 0:
      sideStick.play()
      break
    case 1:
      kick.play()
      hiHat.play()
      break
    case 2:
      kick.play()
      break
    case 3:
      kick.play()
      hiHat.play()
      break
    case 4:
      kick.play()
      crash.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
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
      hiHat.play()
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
      hiHat.play()
      break
    case 4:
      kick.play()
      snare.play()
      crash.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
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
      hiHat.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      break
    case 3:
      kick.play()
      hiHat.play()
      break
    case 4:
      kick.play()
      crash.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
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
      hiHat.play()
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
      hiHat.play()
      break
    case 4:
      kick.play()
      snare.play()
      crash.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

module.exports = { beatOne, beatTwo, beatThree, beatFour }
