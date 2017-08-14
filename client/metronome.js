import WebAudioScheduler from 'web-audio-scheduler'
import { beatOne, beatTwo, beatThree, beatFour } from './beats.js'
import WorkerTimer from 'worker-timer'
import store from '../store'

const audioContext = new AudioContext()
const sched = new WebAudioScheduler({ context: audioContext, timerAPI: WorkerTimer })

let intensity = 0

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

function metronome(e) {
  const t0 = e.playbackTime
  sched.insert(t0 + 0.000, beatOne, {intensity: intensity, beat: 1})
  sched.insert(t0 + 0.500, beatTwo, {intensity: intensity, beat: 2})
  sched.insert(t0 + 1.000, beatThree, {intensity: intensity, beat: 3})
  sched.insert(t0 + 1.500, beatFour, {intensity: intensity, beat: 4})
  sched.insert(t0 + 2.000, metronome)
}

module.exports = { runMetro, intensityUp, intensityDown }
