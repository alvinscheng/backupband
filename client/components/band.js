import React from 'react'

const beatDivs = [1, 2, 3, 4]

export default function RenderBand(props) {
  return (
    <div className="beat-row">
      {
        beatDivs.map((i) => {
          console.log('Props in RenderBand ', props, 'I ', i)
          if (i === props.beat) {
            console.log('matched div to beat!')
            return <div key={ i } className="curBeat"></div>
          }
          return <div key={ i } className="band"></div>
        })
      }
    </div>
  )
}
