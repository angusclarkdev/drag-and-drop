import React, { Component } from 'react'
import classnames from 'classnames'
import './App.css'

class App extends Component {

  state = {
    dragging: false
  }

  boxes = [
    { id: 1, label: 'box 1' },
    { id: 2, label: 'box 2' },
    { id: 3, label: 'box 3' },
    { id: 4, label: 'box 4' },
  ]

  componentDiDMount () {

  }
  handleDragStart = (e, id) => {
    console.info(id)
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  handleDrop = (e) => {

  }

  render () {
    return (
      <div className="App">
      <h1 className='header'> Drag and Drop </h1>
      <ul className='box-container'>
        {this.boxes.map(i => {
          return (
            <li
              key={i.id}
              className={i.id === 1 ? 'box box-colored' : 'box'}
              onDragStart={(e) => this.handleDragStart(e, i.id)}>
            </li>
          )
        })}
      </ul>
      </div>
    )
  }
}

export default App
