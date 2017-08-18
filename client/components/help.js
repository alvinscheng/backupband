import React from 'react'
import Keys from './keys'

export default function RenderHelp(props) {
  return (
    <div onClick={props.showKeys}>
      <div id="text-instructions">
        <p><u>Free Play</u></p>
        <p>Space: Start/Stop Metronome | V / Left Arrow = Intensity Down | N / Right Arrow = Intensity Up | Up/Down Arrow = Tempo Change</p>
        <p>F = Kick Drum | J = Snare Drum | Q = Crash | W = Hi Hat Open | E = Hi Hat Pedal | R = Cross Stick | U = Clap | I = Hi Tom | O = Mid Tom | P = Low Tom</p>
      </div>
      <div id="keyboard">
        <img src="./pics/BuBkeyboard.png" />
        <Keys/>
        <hr />
      </div>
      <div id="rock-out">
        <div id="usbnumpad">
          <img src="./pics/usbnumpad.png" />
        </div>
        <div id="numpad-instructions">
          <p>Backup Band is also programmed to work with a number pad. <a href="http://a.co/0o5OISP" target="_blank" rel="noopener noreferrer">This model</a> was used during testing. With some <a href="http://a.co/35It0lX" target="_blank" rel="noopener noreferrer">damage-free velcro strips</a> you can affix a USB number pad to your guitar and control Backup Band without touching your computer!</p>
          <p>Enter = Start / Stop Metronome | + = Increase Tempo | - = Decrease Tempo<br />
          0 = Intensity 0 | 1 = Intensity 1 | 4 = Intensity 2 | 7 = Intensity 3 | Num Lock = Intensity 4</p>
          <div id="guitar-image">
            <img id="guitar" src="./pics/guitar.png" />
            <img id="guitar-numpad" src="./pics/numpad.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
