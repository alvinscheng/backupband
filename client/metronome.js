import WebAudioScheduler from 'web-audio-scheduler'

const audioContext = new AudioContext();
const sched = new WebAudioScheduler({ context: audioContext });
let masterGain = null;

function metronome(e) {
  const t0 = e.playbackTime;

  sched.insert(t0 + 0.000, ticktack, { frequency: 880, duration: 1.0 });
  sched.insert(t0 + 0.500, ticktack, { frequency: 440, duration: 0.1 });
  sched.insert(t0 + 1.000, ticktack, { frequency: 440, duration: 0.1 });
  sched.insert(t0 + 1.500, ticktack, { frequency: 440, duration: 0.1 });
  sched.insert(t0 + 2.000, metronome);
}

function ticktack(e) {
  const t0 = e.playbackTime;
  const t1 = t0 + e.args.duration;
  const osc = audioContext.createOscillator();
  const amp = audioContext.createGain();

  osc.frequency.value = e.args.frequency;
  osc.start(t0);
  osc.stop(t1);
  osc.connect(amp);

  amp.gain.setValueAtTime(0.5, t0);
  amp.gain.exponentialRampToValueAtTime(1e-6, t1);
  amp.connect(masterGain);

  sched.nextTick(t1, () => {
    osc.disconnect();
    amp.disconnect();
  });
}

sched.on("start", () => {
  masterGain = audioContext.createGain();
  masterGain.connect(audioContext.destination);
});

sched.on("stop", () => {
  masterGain.disconnect();
  masterGain = null;
});

module.exports = { metronome, sched, ticktack }
