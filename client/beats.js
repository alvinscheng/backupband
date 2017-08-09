import { sideStick, kick, snare, hiHat, crash, tomHi, tomMed } from './drums/drums.js'

function beatOne(metro) {
  let intensity = metro.args
  switch (intensity) {
    case 0:
      sideStick.play()
      break
    case 1:
      console.log('case 1')
      kick.play()
      break
    case 2:
      kick.play()
      break
    case 3:
      kick.play()
      hiHat.play()
      break
    case 4:
      kick.play()
      crash.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

function beatTwo(metro) {
  let intensity = metro.args
  switch (intensity) {
    case 0:
      hiHat.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      snare.play()
      break
    case 3:
      kick.play()
      snare.play()
      hiHat.play()
      break
    case 4:
      kick.play()
      snare.play()
      hiHat.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

function beatThree(metro) {
  let intensity = metro.args
  switch (intensity) {
    case 0:
      hiHat.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      break
    case 3:
      kick.play()
      hiHat.play()
      break
    case 4:
      kick.play()
      hiHat.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

function beatFour(metro) {
  let intensity = metro.args
  switch (intensity) {
    case 0:
      hiHat.play()
      break
    case 1:
      kick.play()
      break
    case 2:
      kick.play()
      snare.play()
      break
    case 3:
      kick.play()
      snare.play()
      hiHat.play()
      break
    case 4:
      kick.play()
      snare.play()
      hiHat.play()
      break
    case 99:
      snare.play()
      crash.play()
      tomHi.play()
      tomMed.play()
  }
}

module.exports = { beatOne, beatTwo, beatThree, beatFour }