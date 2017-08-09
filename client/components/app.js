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
        <h3>F = Kick Drum | J = Snare Drum | E = Hi Hat (closed) | W = Cymbal</h3>
        <h3>I = Hi Tom | O = Mid Tom | Q = Cross Stick</h3>
        <h3 onClick={this.startMetro}>START METRONOME</h3>
        <h3 onClick={this.stopMetro}>STOP IT!!!!</h3>
        <RenderBand />
      </div>
    )
  }
}
