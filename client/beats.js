import { sideStick, kick, snare, hiHat, crash, tomHi, tomMed } from './drums/drums.js'
import store from '../store'

function beatOne(metro) {
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 1 }
  })
  let intensity = metro.args.intensity
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
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 2 }
  })
  let intensity = metro.args.intensity
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
      hiHat.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

function beatThree(metro) {
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 3 }
  })
  let intensity = metro.args.intensity
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
      hiHat.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

function beatFour(metro) {
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: 4 }
  })
  let intensity = metro.args.intensity
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
      hiHat.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

module.exports = { beatOne, beatTwo, beatThree, beatFour }
