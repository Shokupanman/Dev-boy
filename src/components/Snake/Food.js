import React, { useState } from 'react'

const Food = (props) => {
  return (
    <div>
      {props.foodDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        }
        return <div className="snakeFood" key={i} style={style}></div>
      })}
    </div>
  )
}

export default Food
