const { Howl } = require('howler')

var sound = new Howl({
  src: ['../db/drums/kick.wav']
}).play();
