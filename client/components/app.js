import React from 'react'
import { connect } from 'react-redux'
import keyboard from '../keyboard.js'
import RenderBand from './band.js'
import RenderHelp from './help.js'
import Scroll from 'react-scroll'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.showKeys = this.showKeys.bind(this)
    this.yahoo = this.yahoo.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', keyed => {
      keyboard(keyed)
    })
  }
  showKeys() {
    if (this.state.keys) {
      this.setState({ keys: false })
    }
    else {
      this.setState({ keys: true })
      const scroll = Scroll.animateScroll
      return scroll.scrollToBottom({
        duration: 2500,
        delay: 200,
        smooth: true
      })
    }
  }
  yahoo() {
    if (this.props.intensity !== 4) {
      return <img src="./pics/yahoo-dashed.png" />
    }
    else {
      switch (this.props.beat) {
        case 1:
          return <img src="./pics/yahoo-1.png" />
        case 2:
          return <img src="./pics/yahoo-2.png" />
        case 3:
          return <img src="./pics/yahoo-3.png" />
        case 4:
          return <img src="./pics/yahoo-4.png" />
      }
    }
  }
  render() {
    return (
      <div>
        <div id="logo">Backup{ this.yahoo() }Band</div>
        <div id="new-user"><a onClick={this.showKeys}>Show / Hide Help</a></div>
        <RenderBand
          beat={this.props.beat}
          intensity={this.props.intensity}
          nextIntensity={this.props.nextIntensity}
        />
        {
          this.state.keys
            ? <RenderHelp showKeys={this.showKeys}/>
            : null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beat: state.tempo.beat,
    intensity: state.tempo.intensity,
    nextIntensity: state.tempo.nextIntensity,
    keys: state.keys
  }
}

export default connect(mapStateToProps)(App)
