import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PacMan from './components/Pac-man'
import Snake from './components/Snake'
import Tetris from './components/Tetris'

export default (
  <Switch>
    <Route path="/pacman" component={PacMan}></Route>
    <Route path="/snake" component={Snake}></Route>
    <Route path="/tetris" component={Tetris}></Route>
  </Switch>
)
