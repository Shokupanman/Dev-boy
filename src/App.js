import React, { useState } from 'react'
import './App.scss'
import {
  MDBJumbotron,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
} from 'mdbreact'
import Tetris from './components/Tetris/Tetris'
import PacMan from './components/Pac-man/Pac-man'
import Snake from './components/Snake/Snake'
import pacmanImg from './img/pacman.png'
import snakeImg from './img/snake.png'
import tetrisImg from './img/tetris.png'

function App() {
  let [tetrisOn, setTetris] = useState(true)
  let [pacmanOn, setPacman] = useState(false)
  let [snakeOn, setSnake] = useState(false)

  const tetrisSwtich = () => {
    setTetris((tetrisOn = true))
    setPacman((pacmanOn = false))
    setSnake((snakeOn = false))
    // console.log(tetrisOn)
    // console.log(pacmanOn)
    // console.log(snakeOn)
  }

  const pacmanSwitch = () => {
    setPacman((pacmanOn = true))
    setSnake((snakeOn = false))
    setTetris((tetrisOn = false))
    // console.log(tetrisOn)
    // console.log(pacmanOn)
    // console.log(snakeOn)
  }

  const snakeSwitch = () => {
    setPacman((pacmanOn = false))
    setSnake((snakeOn = true))
    setTetris((tetrisOn = false))
    // console.log(tetrisOn)
    // console.log(pacmanOn)
    // console.log(snakeOn)
  }

  const GamePlay = () => {
    if (tetrisOn) {
      return <Tetris />
    } else if (snakeOn) {
      return <Snake />
    } else if (pacmanOn) {
      return <PacMan />
    }
  }

  const aPress = (e) => {
    //console.log(e)
    let aClass = document.getElementsByClassName('a')
    if (e.key === 'a') {
      aClass[0].style.backgroundColor = 'darkred'
    } else return (aClass[0].style.backgroundColor = '#4f43ae')
  }

  document.addEventListener('keydown', aPress)

  const bPress = (e) => {
    //console.log(e)
    let bClass = document.getElementsByClassName('b')
    if (e.key === 's') {
      bClass[0].style.backgroundColor = 'darkred'
    } else return (bClass[0].style.backgroundColor = '#b5b6e4')
  }

  document.addEventListener('keydown', bPress)

  const upPress = (e) => {
    //console.log(e)
    let upClass = document.getElementsByClassName('up')
    if (e.key === 'ArrowUp') {
      upClass[0].style.backgroundColor = 'green'
    } else return (upClass[0].style.backgroundColor = '#4f43ae')
  }

  document.addEventListener('keydown', upPress)

  const downPress = (e) => {
    //console.log(e)
    let downClass = document.getElementsByClassName('down')
    if (e.key === 'ArrowDown') {
      downClass[0].style.backgroundColor = 'green'
    } else return (downClass[0].style.backgroundColor = '#4f43ae')
  }

  document.addEventListener('keydown', downPress)

  const leftPress = (e) => {
    //console.log(e)
    let leftClass = document.getElementsByClassName('left')
    if (e.key === 'ArrowLeft') {
      leftClass[0].style.backgroundColor = 'green'
    } else return (leftClass[0].style.backgroundColor = '#4f43ae')
  }

  document.addEventListener('keydown', leftPress)

  const rightPress = (e) => {
    //console.log(e)
    let rightClass = document.getElementsByClassName('right')
    if (e.key === 'ArrowRight') {
      rightClass[0].style.backgroundColor = 'green'
    } else return (rightClass[0].style.backgroundColor = '#4f43ae')
  }

  document.addEventListener('keydown', rightPress)

  return (
    <div className="App">
      <section>
        <nav>
          <MDBBtnGroup
            id="dbButtons"
            size="sm"
            style={{ backgroundColor: '#FFB750' }}
          >
            <MDBBtn
              style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4f43ae',
                maxHeight: '2.5rem',
                maxWidth: '2.5rem',
              }}
              onClick={() => tetrisSwtich()}
            >
              <img
                src={tetrisImg}
                alt=""
                style={{ maxHeight: '2rem', maxWidth: '2rem' }}
              />
            </MDBBtn>
            <MDBBtn
              style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4f43ae',
                maxHeight: '2.5rem',
                maxWidth: '2.5rem',
              }}
              onClick={() => snakeSwitch()}
            >
              <img
                src={snakeImg}
                alt=""
                style={{
                  maxHeight: '1.6rem',
                  maxWidth: '1.6rem',
                }}
              />
            </MDBBtn>
            <MDBBtn
              style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4f43ae',
                maxHeight: '2.5rem',
                maxWidth: '2.5rem',
              }}
              onClick={() => pacmanSwitch()}
            >
              <img
                src={pacmanImg}
                alt=""
                style={{ maxHeight: '1.6rem', maxWidth: '1.6rem' }}
              />
            </MDBBtn>
          </MDBBtnGroup>
        </nav>
        <section className="body">
          <section style={{ marginRight: '3rem' }}>
            <MDBBtn
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#4f43ae',
              }}
              className="a"
            >
              A
            </MDBBtn>
            <MDBBtn
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#b5b6e4',
              }}
              className="b"
            >
              S
            </MDBBtn>
          </section>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MDBJumbotron id="screen">
              <MDBContainer>
                <GamePlay />
              </MDBContainer>
            </MDBJumbotron>
          </div>
          <section className="buttons">
            <MDBBtn
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: '#4f43ae',
                marginLeft: '2rem',
              }}
              className="up"
            >
              <MDBIcon icon="caret-up" />
            </MDBBtn>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: '1rem',
              }}
            >
              <MDBBtn
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  backgroundColor: '#4f43ae',
                  marginRight: '2rem',
                }}
                className="left"
              >
                <MDBIcon icon="caret-left" />
              </MDBBtn>
              <MDBBtn
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  backgroundColor: '#4f43ae',
                }}
                className="right"
              >
                <MDBIcon icon="caret-right" />
              </MDBBtn>
            </div>
            <MDBBtn
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: '#4f43ae',
                marginLeft: '2rem',
              }}
              className="down"
            >
              <MDBIcon icon="caret-down" />
            </MDBBtn>
          </section>
        </section>
      </section>
    </div>
  )
}

export default App
