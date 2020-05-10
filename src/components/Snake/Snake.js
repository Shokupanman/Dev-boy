import React, { useState, useEffect } from 'react'
import './Snake.scss'
import SnakeBody from './SnakeBody'
import Food from './Food'

const Snake = () => {
  let [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ])
  let [foodDots, setFoodDots] = useState([[3, 6]])
  let [direction, setDirection] = useState('RIGHT')

  // useEffect(() => {
  //   let min = 1
  //   let max = 98
  //   let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
  //   let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
  //   return setFoodDots([x, y])
  // })

  onkeydown((e) => {
    e = e || window.event
    switch (e.key) {
      case 'ArrowUp':
        setDirection('UP')
        break
      case 'ArrowDown':
        setDirection('DOWN')
        break
      case 'ArrowRight':
        setDirection('RIGHT')
        break
      case 'ArrowLeft':
        setDirection('Left')
        break
    }
  })

  return (
    <div className="snakeArena">
      <SnakeBody snakeDots={snakeDots} />
      <Food foodDots={foodDots} />
    </div>
  )
}
export default Snake
