import React, { useState } from 'react'
import './Snake.scss'

const Snake = () => {
  let [grid, setGrid] = useState([])
  let [rows, setRows] = useState(10)
  let [cols, setCols] = useState(10)

  // const updateGrid = (k,v) => {
  //   setGrid(grid.set(k,v))
  // }
  const snakeGrid = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      snakeGrid.push({
        row,
        col,
      })
    }
  }
  setGrid({ grid: snakeGrid })

  const gridItems = grid.map((snakeGrid) => {
    return (
      <div
        key={snakeGrid.row.toString() + '-' + snakeGrid.col.toString()}
        className="grid-item"
      ></div>
    )
  })
  return (
    <div className="snake-container">
      <section className="grid">{gridItems}</section>
    </div>
  )
}
export default Snake
