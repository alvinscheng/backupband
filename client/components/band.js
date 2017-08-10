import React from 'react'

const beatDivs = [1, 2, 3, 4]
const drumPics = {
  0: ['./drums/pics/sticks.png', './drums/pics/sticks.png', './drums/pics/sticks.png', './drums/pics/sticks.png'],
  1: ['./drums/pics/kick.png', './drums/pics/kick.png', './drums/pics/kick.png', './drums/pics/kick.png'],
  2: ['./drums/pics/kick.png', './drums/pics/kick-snare.png', './drums/pics/kick.png', './drums/pics/kick-snare.png'],
  3: ['./drums/pics/kick-hihat.png', './drums/pics/kick-snare-hihat.png', './drums/pics/kick-hihat.png', './drums/pics/kick-snare-hihat.png'],
  4: ['./drums/pics/kick-crash.png', './drums/pics/kick-snare-crash.png', './drums/pics/kick-crash.png', './drums/pics/kick-snare-crash.png']
}

export default function RenderBand(props) {
  return (
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
  )
}
