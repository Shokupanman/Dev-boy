import React, { useState } from 'react'
import './Snake.scss'
import SnakeBody from './SnakeBody'
import Food from './Food'

const Snake = () => {
  let [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ])
  let [foodDots, setFoodDots] = useState([[3, 6]])

  const randoPosition = () => {
    let min = 1
    let max = 98
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
    return setFoodDots([x, y])
  }
  return (
    <div className="snakeArena">
      <SnakeBody snakeDots={snakeDots} />
      <Food foodDots={foodDots} />
    </div>
  )
}
export default Snake
