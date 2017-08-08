import React from 'react'

export default class RenderBand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="band"></div>
        <div className="band"></div>
        <div className="band"></div>
        <div className="band"></div>
      </div>
    )
  }
}
