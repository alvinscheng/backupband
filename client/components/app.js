import React from 'react'
import playDrums from '../drums/drum-machine.js'
import RenderBand from './band.js'

import WebAudioScheduler from 'web-audio-scheduler'
import { beatOne, beatTwo, beatThree, beatFour } from '../beats.js'
import WorkerTimer from 'worker-timer'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    window.addEventListener('keydown', keyed => {
      playDrums(keyed.keyCode)
    })
  }
  render() {
    return (
      <div>
        <h1>Play the Drums!</h1>
        <h3>F = Kick Drum | J = Snare Drum | E = Hi Hat (closed) | W = Cymbal</h3>
        <h3>I = Hi Tom | O = Mid Tom | Q = Cross Stick</h3>
        <h3 onClick={startMetro}>START METRONOME</h3>
        <h3 onClick={stopMetro}>STOP IT!!!!</h3>
        <h3>Intensity (Click to change)</h3>
        <span onClick={intensityUp}>UP or </span>
        <span onClick={intensityDown}>DOWN</span>
        <RenderBand />
      </div>
    )
  }
}

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
  if (intensity > 4) return
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
