import React from 'react'
import playDrums from '../drums/drum-machine.js'
import { metronome, sched } from '../metronome.js'
import RenderBand from './band.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    window.addEventListener('keydown', keyed => {
      playDrums(keyed.keyCode)
    })
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        sched.aheadTime = 0.1
      }
      else {
        sched.aheadTime = 1.0
        sched.process()
      }
    })
  }
  startMetro() {
    sched.start(metronome)
  }
  stopMetro() {
    sched.stop(true)
  }
  render() {
    return (
      <div>
        <h1>Play the Drums!</h1>
        <h3>F = Kick Drum | J = Snare Drum | E = Hi Hat (closed) | W = Cymbal | I = Hi Tom | O = Kick Drum</h3>
        <h3 onClick={this.startMetro}>START METRONOME</h3>
        <h3 onClick={this.stopMetro}>STOP IT!!!!</h3>
        <RenderBand />
      </div>
    )
  }
}
