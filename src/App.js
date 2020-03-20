import React, { useState } from 'react'
import './App.scss'
import {
  MDBJumbotron,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
  MDBIcon
} from 'mdbreact'
import Tetris from './components/Tetris'
import pacmanImg from './img/pacman.png'
import snakeImg from './img/snake.png'
import tetrisImg from './img/tetris.png'

function App() {
  const [tetrisOn, setTetris] = useState(false)
  const [pacmanOn, setPacman] = useState(false)
  const [snakeOn, setSnake] = useState(false)

  return (
    <div className="App">
      <header
        style={{
          backgroundColor: '#FFB750',
          margin: 0,
          borderColor: '#FFB750'
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
                maxWidth: '2.5rem'
              }}
              onClick={
                (() => setTetris(true), setPacman(false), setSnake(false))
              }
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
                maxWidth: '2.5rem'
              }}
              onClick={
                (() => setSnake(true), setTetris(false), setPacman(false))
              }
            >
              <img
                src={snakeImg}
                alt=""
                style={{
                  maxHeight: '1.6rem',
                  maxWidth: '1.6rem'
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
                maxWidth: '2.5rem'
              }}
              onClick={
                (() => setPacman(true), setTetris(false), setSnake(false))
              }
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
                marginLeft: '2rem'
              }}
            >
              <MDBIcon icon="caret-up" />
            </MDBBtn>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: '1rem'
              }}
            >
              <MDBBtn
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  backgroundColor: '#9650FF',
                  marginRight: '2rem'
                }}
              >
                <MDBIcon icon="caret-left" />
              </MDBBtn>
              <MDBBtn
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  backgroundColor: '#9650FF'
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
                marginLeft: '2rem'
              }}
            >
              <MDBIcon icon="caret-down" />
            </MDBBtn>
          </section>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <MDBJumbotron id="screen">
              <MDBContainer>
                <Tetris />
              </MDBContainer>
            </MDBJumbotron>
          </div>
          <section style={{ marginLeft: '3rem' }}>
            <MDBBtn
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#9650FF'
              }}
            >
              {' '}
              <MDBIcon fab icon="adn" />
            </MDBBtn>
            <MDBBtn
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#9650FF'
              }}
            >
              {' '}
              <MDBIcon icon="bold" />
            </MDBBtn>
          </section>
        </section>
      </section>
    </div>
  )
}

export default App
