import WebAudioScheduler from 'web-audio-scheduler'
import { sideStick, hiHat } from './drums/drum-machine.js'

const audioContext = new AudioContext()
const sched = new WebAudioScheduler({ context: audioContext })

function beatOne() {
  sideStick.play()
}

function beat() {
  hiHat.play()
}

function metronome(e) {
  const t0 = e.playbackTime

  sched.insert(t0 + 0.000, beatOne)
  sched.insert(t0 + 0.500, beat)
  sched.insert(t0 + 1.000, beat)
  sched.insert(t0 + 1.500, beat)
  sched.insert(t0 + 2.000, metronome)
}

module.exports = { metronome, sched }
