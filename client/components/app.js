import React from 'react'
import { connect } from 'react-redux'
import keyboard from '../keyboard.js'
import RenderBand from './band.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    window.addEventListener('keydown', keyed => {
      keyboard(keyed)
    })
  }
  render() {
    return (
      <div>
        <div id="logo">Backup<img src="./pics/yahoo-dashed.png" />Band</div>
        <RenderBand
          beat={this.props.beat}
          intensity={this.props.intensity}
          nextIntensity={this.props.nextIntensity}
        />
        <div id="keyboard">
          <img src="./pics/BuBkeyboard.png" />
        </div>
        <div id="text-instructions">
          <p><u>Free Play</u></p>
          <p>Space: Start/Stop Metronome | V / Left Arrow = Intensity Down | N / Right Arrow = Intensity Up | Up/Down Arrow = Tempo Change</p>
          <p>F = Kick Drum | J = Snare Drum | Q = Crash | W = Hi Hat Open | E = Hi Hat Pedal | R = Cross Stick | U = Clap | I = Hi Tom | O = Mid Tom | P = Low Tom</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beat: state.beat,
    intensity: state.intensity,
    nextIntensity: state.nextIntensity
  }
}

export default connect(mapStateToProps)(App)
