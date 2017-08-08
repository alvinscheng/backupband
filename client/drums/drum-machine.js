const { Howl } = require('howler')

const kick = new Howl({
  src: ['./drums/sound-files/kick.wav'],
  volume: 0.6
})

const snare = new Howl({
  src: ['./drums/sound-files/snare.wav'],
  volume: 0.6
})

const hiHat = new Howl({
  src: ['./drums/sound-files/hihat_closed.wav'],
  volume: 0.6
})

const crash = new Howl({
  src: ['./drums/sound-files/crash.wav'],
  volume: 0.6
})

const tomHi = new Howl({
  src: ['./drums/sound-files/tom_hi.wav'],
  volume: 0.6
})

const tomMed = new Howl({
  src: ['./drums/sound-files/tom_med.wav'],
  volume: 0.6
})

const sideStick = new Howl({
  src: ['./drums/sound-files/side-stick.wav'],
  volume: 0.6
})

function playDrums(key) {
  switch (key) {
    case 70: kick.play()
      break
    case 74: snare.play()
      break
    case 69: hiHat.play()
      break
    case 87: crash.play()
      break
    case 73: tomHi.play()
      break
    case 79: tomMed.play()
  }
}

module.exports = { playDrums, sideStick, hiHat }
