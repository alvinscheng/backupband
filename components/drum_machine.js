const { Howl } = require('howler')

var kick = new Howl({
  src: ['./drums/kick.wav'],
  volume: 0.6,
})

var snare = new Howl({
  src: ['./drums/snare.wav'],
  volume: 0.6,
})

var hihat = new Howl({
  src: ['./drums/hihat_closed.wav'],
  volume: 0.6,
})

var crash = new Howl({
  src: ['./drums/crash.wav'],
  volume: 0.6,
})

var tom_hi = new Howl({
  src: ['./drums/tom_hi.wav'],
  volume: 0.6,
})

var tom_med = new Howl({
  src: ['./drums/tom_med.wav'],
  volume: 0.6,
})

export default function playDrums(key) {
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
