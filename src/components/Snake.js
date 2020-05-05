import React, { useState } from 'react'
import './Snake.scss'

const Snake = () => {
  return (
    <div className="snakeArena">
      <div className="snake" style={{ top: 0, left: 0 }}></div>
      <div className="snake" style={{ top: 0, left: '2%' }}></div>
      <div className="snake" style={{ top: 0, left: '4% ' }}></div>
    </div>
  )
}
export default Snake
