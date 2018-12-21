import React, { Component } from 'react'
// import classnames from 'classnames'
import './App.css'

class App extends Component {

  state = {
    dragging: false,
    active: 0
  }

  boxes = [
    { id: 1, label: 'box 1' },
    { id: 2, label: 'box 2' },
    { id: 3, label: 'box 3' },
    { id: 4, label: 'box 4' },
  ]

  handleDragStart = e => {
    e.persist()
    setTimeout(() => {
      this.setState({ dragging: true })
      e.target.className += ' invisible'
    }, 10)
  }

  handleDragEnd = (e) => {
   this.setState({ dragging: false })
   this.getClasses()
  }

  handleDragOver = (e) => {
    e.preventDefault()
    this.setState({ active: parseInt(e.target.id) })
    // this.getClasses()
  }

  getClasses = (id) => {
    if (id === this.state.active && !this.state.dragging) {
      return 'image'
    }

    if (this.state.dragging) {
      return 'bordered'
    } else {
      return ''
    }
  }

  render () {
    const draggableListItems = this.boxes.map((item, i) => {
      return (
        <li
          key={item.id}
          id={i}
          className={`box ${this.getClasses(i)}`}
          draggable={this.state.active === i}
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDragEnd={this.handleDragEnd}>
        </li>
      )
    })

    return (
      <div className="App">
      <h1 className='header'> Drag and Drop </h1>
      <ul className='box-container'>
        {draggableListItems}
      </ul>
      </div>
    )
  }
}

export default App
