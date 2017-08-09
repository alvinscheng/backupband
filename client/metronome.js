import WebAudioScheduler from 'web-audio-scheduler'
import { beatOne, beatTwo, beatThree, beatFour } from './beats.js'
import WorkerTimer from 'worker-timer'

const audioContext = new AudioContext()
const sched = new WebAudioScheduler({ context: audioContext, timerAPI: WorkerTimer, interval: 0.025, aheadTime: 1.0 })
let intensity = 3

function metronome(e) {
  const t0 = e.playbackTime

  sched.insert(t0 + 0.000, beatOne, intensity)
  sched.insert(t0 + 0.500, beatTwo, intensity)
  sched.insert(t0 + 1.000, beatThree, intensity)
  sched.insert(t0 + 1.500, beatFour, intensity)
  sched.insert(t0 + 2.000, metronome)
}

module.exports = { metronome, sched }
