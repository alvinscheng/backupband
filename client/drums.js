import { Howl } from 'howler'

const crossStick = new Howl({
  src: ['./sound-files/cross_stick.wav'],
  volume: 0.6
})

const clap = new Howl({
  src: ['./sound-files/clap.wav'],
  volume: 0.6
})

const kick = new Howl({
  src: ['./sound-files/kick.wav'],
  volume: 0.7
})

const snare = new Howl({
  src: ['./sound-files/snare.wav'],
  volume: 0.6
})

const hiHatPedal = new Howl({
  src: ['./sound-files/hihat_pedal.wav'],
  volume: 0.2
})

const hiHatOpen = new Howl({
  src: ['./sound-files/hihat_open.wav'],
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

const tomLow = new Howl({
  src: ['./sound-files/tom_low.wav'],
  volume: 0.6
})

module.exports = { crossStick, clap, kick, snare, hiHatPedal, hiHatOpen, crash, tomHi, tomMed, tomLow }
