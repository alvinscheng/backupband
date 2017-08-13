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
        <div id="logo">Backup Band</div>
        <RenderBand
          beat={this.props.beat}
          intensity={this.props.intensity}
          nextIntensity={this.props.nextIntensity}
        />
        <h5>Free Play: F = Kick Drum | J = Snare Drum | R = Cross Stick | E = Hi Hat Pedal | W = Hi Hat Open | Q = Crash | U = Clap | I = Hi Tom | O = Mid Tom | P = Low Tom</h5>
        <div id="keyboard">
          <img src="./pics/BuBkeyboard.png" />
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
