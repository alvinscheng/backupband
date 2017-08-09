import WebAudioScheduler from 'web-audio-scheduler'
import { beatOne, beatTwo, beatThree, beatFour } from './beats.js'
import WorkerTimer from 'worker-timer'

const audioContext = new AudioContext()
const sched = new WebAudioScheduler({ context: audioContext, timerAPI: WorkerTimer, interval: 0.025, aheadTime: 1.0 })

let intensity = 0

function startMetro() {
  if (metronome.running) return
  metronome.running = true
  sched.start(metronome)
}
function stopMetro() {
  metronome.running = false
  sched.stop(true)
}

function intensityUp() {
  if (intensity >= 4) return
  return intensity++
}

function intensityDown() {
  if (intensity <= 0) return
  return intensity--
}

function metronome(e) {
  const t0 = e.playbackTime
  console.log('Intensity (in metronome func): ', intensity)
  sched.insert(t0 + 0.000, beatOne, {intensity: intensity, beat: 1})
  sched.insert(t0 + 0.500, beatTwo, {intensity: intensity, beat: 2})
  sched.insert(t0 + 1.000, beatThree, {intensity: intensity, beat: 3})
  sched.insert(t0 + 1.500, beatFour, {intensity: intensity, beat: 4})
  sched.insert(t0 + 2.000, metronome)
}

module.exports = { startMetro, stopMetro, intensityUp, intensityDown }
