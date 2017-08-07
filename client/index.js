const context = new AudioContext

const oscillator = context.createOscillator()
oscillator.frequency.value = 261.6

oscillator.connect(context.destination)

oscillator.start(0)
oscillator.stop(5)
