import React from 'react'

export default class RenderBand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="band beat1"></div>
        <div className="band beat2"></div>
        <div className="band beat3"></div>
        <div className="band beat4"></div>
      </div>
    )
  }
}
