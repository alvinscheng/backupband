import { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow } from './drums.js'
import store from '../store'

function beatOne(metro) {
  let intensity = metro.args.intensity
  let beat = metro.args.beat
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: beat, intensity: intensity }
  })
  switch (intensity) {
    case 0:
      crossStick.play()
      break
    case 1:
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
  let beat = metro.args.beat
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: beat, intensity: intensity }
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
    case 4:
      kick.play()
      snare.play()
      hiHatOpen.play()
  }
}

function beatThree(metro) {
  let intensity = metro.args.intensity
  let beat = metro.args.beat
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: beat, intensity: intensity }
  })
  switch (intensity) {
    case 0:
      crossStick.play()
      break
    case 1:
    case 2:
      kick.play()
      break
    case 3:
    case 4:
      kick.play()
      hiHatOpen.play()
  }
}

function beatFour(metro) {
  let intensity = metro.args.intensity
  let beat = metro.args.beat
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: beat, intensity: intensity }
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
    case 4:
      kick.play()
      snare.play()
      hiHatOpen.play()
  }
}

function eighthNote(metro) {
  let intensity = metro.args.intensity
  let beat = metro.args.beat
  store.dispatch({
    type: 'BEAT_CHANGE',
    payload: { beat: beat, intensity: intensity }
  })
  console.log('8th note function!', intensity, beat)
  switch (intensity) {
    case 0:
    case 1:
    case 2:
      break
    case 3:
    case 4:
      switch (beat) {
        case 1.5:
        case 2.5:
        case 4.5:
          break
        case 3.5:
          kick.play()
          break
      }
  }
}

module.exports = { beatOne, beatTwo, beatThree, beatFour, eighthNote }
