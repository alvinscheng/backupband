import React from 'react'
import playDrums from '../drums/drum-machine.js'
import { metronome, sched, ticktack } from '../metronome.js'

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
        sched.aheadTime = 0.1;
      } else {
        sched.aheadTime = 1.0;
        sched.process();
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
        <h3>F = Kick Drum</h3>
        <h3>J = Snare Drum</h3>
        <h3>E = Hi Hat (closed)</h3>
        <h3>W = Cymbal</h3>
        <h3>I = Hi Tom</h3>
        <h3>O = Kick Drum</h3>
        <h3 onClick={this.startMetro}>START METRONOME</h3>
        <h3 onClick={this.stopMetro}>STOP THE BEEPING!!!</h3>
      </div>
    )
  }
}
