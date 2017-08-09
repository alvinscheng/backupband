import React from 'react'
import playDrums from '../drums/drum-machine.js'
import RenderBand from './band.js'
import { startMetro, stopMetro, intensityUp, intensityDown } from '../metronome.js'

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
