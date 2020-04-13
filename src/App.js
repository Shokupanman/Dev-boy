import React, { useState } from 'react'
import './App.scss'
import {
  MDBJumbotron,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
} from 'mdbreact'
import Tetris from './components/Tetris'
import PacMan from './components/Pac-man'
import Snake from './components/Snake'
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

  return (
    <div className="App">
      <header
        style={{
          backgroundColor: '#FFB750',
          margin: 0,
          borderColor: '#FFB750',
        }}
      >
        {/* <MDBJumbotron style={{ backgroundColor: '#FFB750', margin: 0 }}>
          <MDBContainer> */}
        <h1 className="heading">DEV BOI</h1>
        {/* </MDBContainer>
        </MDBJumbotron> */}
      </header>
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
                backgroundColor: '#9650FF',
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
                backgroundColor: '#9650FF',
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
                backgroundColor: '#9650FF',
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
          <section className="buttons">
            <MDBBtn
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: '#9650FF',
                marginLeft: '2rem',
              }}
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
                  backgroundColor: '#9650FF',
                  marginRight: '2rem',
                }}
              >
                <MDBIcon icon="caret-left" />
              </MDBBtn>
              <MDBBtn
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  backgroundColor: '#9650FF',
                }}
              >
                <MDBIcon icon="caret-right" />
              </MDBBtn>
            </div>
            <MDBBtn
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: '#9650FF',
                marginLeft: '2rem',
              }}
            >
              <MDBIcon icon="caret-down" />
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
          <section style={{ marginLeft: '3rem' }}>
            <MDBBtn
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#9650FF',
              }}
            >
              A
            </MDBBtn>
            <MDBBtn
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#9650FF',
              }}
            >
              B
            </MDBBtn>
          </section>
        </section>
      </section>
    </div>
  )
}

export default App
