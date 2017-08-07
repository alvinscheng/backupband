const { Howl } = require('howler')
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app.js'

ReactDOM.render(
  <App/>,
  document.querySelector('#content')
)

var kick = new Howl({
  src: ['../db/drums/kick.wav'],
  loop: false,
  volume: 0.6,
})

var snare = new Howl({
  src: ['../db/drums/snare.wav'],
  loop: false,
  volume: 0.6,
})

var hihat = new Howl({
  src: ['../db/drums/hihat_closed.wav'],
  loop: false,
  volume: 0.6,
})

var crash = new Howl({
  src: ['../db/drums/crash.wav'],
  loop: false,
  volume: 0.6,
})

var tom_hi = new Howl({
  src: ['../db/drums/tom_hi.wav'],
  loop: false,
  volume: 0.6,
})

var tom_med = new Howl({
  src: ['../db/drums/tom_med.wav'],
  loop: false,
  volume: 0.6,
})

function playDrums(key) {
  switch(key) {
    case 70: kick.play()
      break
    case 74: snare.play()
      break
    case 69: hihat.play()
      break
    case 87: crash.play()
      break
    case 73: tom_hi.play()
      break
    case 79: tom_med.play()
  }
}

window.addEventListener('keydown', keyed => {
  playDrums(keyed.keyCode)
})
