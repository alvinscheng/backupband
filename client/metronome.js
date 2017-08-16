import WebAudioScheduler from 'web-audio-scheduler'
import { beatOne, beatTwo, beatThree, beatFour, eighthNote } from './beats.js'
import { Howler } from 'howler'
import store from '../store'

const sched = new WebAudioScheduler({ context: Howler.ctx })

let intensity = 0
let tempo = 120

const runMetro = () => {
  if (metronome.running) {
    metronome.running = false
    sched.stop(true)
  }
  else {
    metronome.running = true
    sched.start(metronome)
  }
}

function intensityChange(next) {
  if (!metronome.running) {
    store.dispatch({
      type: 'INTENSITY_CHANGE_ON_STOP',
      payload: { intensity: next, nextIntensity: next }
    })
  }
  else {
    store.dispatch({
      type: 'INTENSITY_CHANGE',
      payload: { nextIntensity: next }
    })
  }
}

const intensityUp = () => {
  if (intensity >= 4) return
  intensity++
  intensityChange(intensity)
  return intensity
}

const intensityDown = () => {
  if (intensity <= 0) return
  intensity--
  intensityChange(intensity)
  return intensity
}

const setIntensity = (newIntensity) => {
  intensity = newIntensity
  intensityChange(intensity)
  return intensity
}

const upTempo = () => {
  tempo = tempo + 5
  return tempo
}

const downTempo = () => {
  tempo = tempo - 5
  return tempo
}

function metronome(e) {
  let t0 = e.playbackTime
  let nextBeat = (60 / tempo)

  sched.insert(t0, beatOne, {intensity: intensity, beat: 1})
  sched.insert(t0 + (nextBeat * 0.5), eighthNote, {intensity: intensity, beat: 1.5})
  sched.insert(t0 + nextBeat, beatTwo, {intensity: intensity, beat: 2})
  sched.insert(t0 + (nextBeat * 1.5), eighthNote, {intensity: intensity, beat: 2.5})
  sched.insert(t0 + (nextBeat * 2), beatThree, {intensity: intensity, beat: 3})
  sched.insert(t0 + (nextBeat * 2.5), eighthNote, {intensity: intensity, beat: 3.5})
  sched.insert(t0 + (nextBeat * 3), beatFour, {intensity: intensity, beat: 4})
  sched.insert(t0 + (nextBeat * 3.5), eighthNote, {intensity: intensity, beat: 4.5})

  sched.insert(t0 + (nextBeat * 4), metronome)
}

module.exports = { runMetro, intensityUp, intensityDown, setIntensity, upTempo, downTempo, intensity }
