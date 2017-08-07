import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('Your App component mounted, homey')
  }
  render() {
    return (
      <div>
        <h1>You rendered something you crazy fool!</h1>
      </div>
    )
  }
}
