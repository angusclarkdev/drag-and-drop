import React, { Component } from 'react'
// import classnames from 'classnames'
import './App.css'

class App extends Component {

  state = {
    dragging: false,
    draggingOver: false
  }

  handleDragStart = () => {
    setTimeout(() => {
      this.setState({ dragging: true, draggingOver: true })
    }, 10)
  }

  handleDragEnd = (e) => {
    this.setState({ dragging: false, draggingOver: false })
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  render () {
    return (
      <div className="App">
      <h1 className='header'> Drag and Drop </h1>
      <ul className='box-container'>
        <li
          className={this.state.dragging ? 'box invisible' : 'box box-image'}
          draggable
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}> 
        </li>
        <li className={this.state.draggingOver ? 'box bordered' : 'box'} onDragOver={this.handleDragOver}></li>
          <li className={this.state.draggingOver ? 'box bordered' : 'box'}></li>
          <li className={this.state.draggingOver ? 'box bordered' : 'box'}></li>
      </ul>
      </div>
    )
  }
}

export default App
