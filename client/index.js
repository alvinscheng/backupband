const context = new AudioContext

const oscillator = context.createOscillator()
oscillator.frequency.value = 150

const gain = context.createGain()

oscillator.connect(gain)
gain.connect(context.destination)

const now = context.currentTime

gain.gain.setValueAtTime(1,now)
gain.gain.exponentialRampToValueAtTime(0.001, now + 2)

oscillator.start(now)
oscillator.stop(now + 2)
