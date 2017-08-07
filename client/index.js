import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app.js'
import playDrums from '../components/drum_machine.js'

ReactDOM.render(
  <App/>,
  document.querySelector('#content')
)

window.addEventListener('keydown', keyed => {
  playDrums(keyed.keyCode)
})
