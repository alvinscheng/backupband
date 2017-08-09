import React from 'react'

export default class RenderBand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="beat-row">
        <div className="band beatOne"></div>
        <div className="band beatTwo"></div>
        <div className="band beatThree"></div>
        <div className="band beatFour"></div>
      </div>
    )
  }
}
