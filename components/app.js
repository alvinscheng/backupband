import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('Component mounted.')
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
      </div>
    )
  }
}
