import React from 'react'

const beatDivs = [1, 2, 3, 4]
const drumPics = {
  0: ['./pics/sticks.png', './pics/hihat-pedal.png', './pics/hihat-pedal.png', './pics/hihat-pedal.png'],
  1: ['./pics/kick.png', './pics/kick.png', './pics/kick.png', './pics/kick.png'],
  2: ['./pics/kick.png', './pics/kick-snare.png', './pics/kick.png', './pics/kick-snare.png'],
  3: ['./pics/kick-hihat.png', './pics/kick-snare-hihat.png', './pics/kick-hihat.png', './pics/kick-snare-hihat.png'],
  4: ['./pics/kick-crash.png', './pics/kick-snare-hihat.png', './pics/kick-hihat.png', './pics/kick-snare-hihat.png']
}

export default function RenderBand(props) {
  return (
    <div>
      <div className="ui cards beat-row">
        {
          beatDivs.map((i) => {
            if (i === props.beat) {
              return (
                <div key={ i } className="ui raised centered card" id="curBeat">
                  <div className="content">
                    <img src={drumPics[props.intensity][i - 1]} className="ui image"/>
                  </div>
                </div>
              )
            }
            return (
              <div key={ i } className="ui raised centered card band">
                <div className="content">
                  <img src={drumPics[props.intensity][i - 1]} className="ui image"/>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="ui cards beat-row" id="next-bar">
        {
          beatDivs.map((i) => {
            return (
              <div key={ i } className="ui raised centered card band">
                <div className="content">
                  <img src={drumPics[props.nextIntensity][i - 1]} className="ui image"/>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
