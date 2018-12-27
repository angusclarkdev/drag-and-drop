import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    dragging: false,
    dragItem: 0,
    dropItem: 0
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
      this.setState({ dragging: true,  })
      e.target.className += 'invisible'
    }, 10)
  }

  handleDragEnd = (e) => {
  this.setState({ dragging: false })
  this.getClasses()
  }

  handleDrop = (e) => {
    this.setState(prevState => ({
      dragging: false,
      dragItem: prevState.dropItem
    }))
    this.getClasses()
    this.swapItems()
  }

  // sets the backround image for drop target
  handleDragOver = (e) => {
    e.preventDefault()
    this.setState({ dropItem: parseInt(e.target.id) })
  }

  swapItems (item) {
    let temp = this.boxes[this.state.dragItem]
    this.boxes[this.state.dragItem] = this.boxes[this.state.dropItem]
    this.boxes[this.state.dropItem] = temp
  }

  getClasses = (id) => {
    if (id === this.state.dropItem && !this.state.dragging) {
      return 'image'
    }

    if (this.state.dragging && id !== this.state.dragItem) {
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
          label={item.label}
          className={`box ${this.getClasses(i)} `}
          draggable={this.state.dropItem === i}
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDragEnd={this.handleDragEnd}
          onDrop={this.handleDrop}>
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
