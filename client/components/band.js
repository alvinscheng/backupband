import React from 'react'

const beatDivs = [1, 2, 3, 4]

export default function RenderBand(props) {
  return (
    <div className="ui cards beat-row">
      {
        beatDivs.map((i) => {
          console.log('Props in RenderBand ', props, 'I ', i)
          if (i === props.beat) {
            console.log('matched div to beat!')
            return (
              <div key={ i } className="ui raised centered card" id="curBeat">
                <div className="content">
                </div>
              </div>
            )
          }
          return (
            <div key={ i } className="ui raised centered card band">
              <div className="content">
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
