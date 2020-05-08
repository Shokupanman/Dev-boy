import React, { useState } from 'react'

const SnakeBody = (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        }
        //console.log(dot)
        return <div className="snake" key={i} style={style}></div>
      })}
    </div>
  )
}
export default SnakeBody
