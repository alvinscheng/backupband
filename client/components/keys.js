import React from 'react'
import { connect } from 'react-redux'

class Keys extends React.Component {
  setPosition() {
    const position = {
      position: 'absolute',
      top: this.props.coordinates.y + '%',
      left: this.props.coordinates.x + '%',
      height: this.props.coordinates.height + '%',
      width: this.props.coordinates.width + '%'
    }

    return position
  }

  render() {
    return <div className="highlight-key" style={this.setPosition()}></div>
  }
}

function mapStateToProps(state) {
  return {
    coordinates: state.coordinates
  }
}

export default connect(mapStateToProps)(Keys)
