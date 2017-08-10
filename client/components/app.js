import React from 'react'
import { connect } from 'react-redux'
import playDrums from '../drums/drum-machine.js'
import RenderBand from './band.js'
import { startMetro, stopMetro, intensityUp, intensityDown } from '../metronome.js'

class App extends React.Component {
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
        <div id="logo">Backup Band</div>
        <div className="control-bar">
          <div className="controls">
            <h3>Metronome</h3>
            <button onClick={startMetro} className="ui labeled icon button">
              <i className="play icon"></i>
              Start
            </button>
            <button onClick={stopMetro} className="ui right labeled icon button">
              <i className="stop icon"></i>
              Stop
            </button>
          </div>
          <div className="controls">
            <h3>Intensity</h3>
            <button onClick={intensityUp} className="ui labeled icon button">
              <i className="arrow up icon"></i>
              Raise
            </button>
            <button onClick={intensityDown} className="ui right labeled icon button">
              <i className="arrow down icon"></i>
              Lower
            </button>
          </div>
        </div>
        <RenderBand beat={this.props.beat} intensity={this.props.intensity}/>
        <h5>Free Play: F = Kick Drum | J = Snare Drum | E = Hi Hat (closed) | W = Cymbal | I = Hi Tom | O = Mid Tom | Q = Cross Stick</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beat: state.beat,
    intensity: state.intensity
  }
}

export default connect(mapStateToProps)(App)
