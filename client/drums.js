import { Howl } from 'howler'

const kick = new Howl({
  src: ['./sound-files/kick.wav'],
  volume: 0.6
})

const snare = new Howl({
  src: ['./sound-files/snare.wav'],
  volume: 0.6
})

const hiHat = new Howl({
  src: ['./sound-files/hihat_closed.wav'],
  volume: 0.6
})

const crash = new Howl({
  src: ['./sound-files/crash.wav'],
  volume: 0.6
})

const tomHi = new Howl({
  src: ['./sound-files/tom_hi.wav'],
  volume: 0.6
})

const tomMed = new Howl({
  src: ['./sound-files/tom_med.wav'],
  volume: 0.6
})

const sideStick = new Howl({
  src: ['./sound-files/side-stick.wav'],
  volume: 0.6
})

module.exports = { sideStick, kick, snare, hiHat, crash, tomHi, tomMed }
