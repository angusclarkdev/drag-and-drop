import React, { Component } from 'react'
import './App.css'

class App extends Component {

  handleDragStart = (e) => {
    console.info('start')
  }

  handleDragEnd = (e) => {
  }

  render () {
    return (
      <div className="App">
      <h1 className='header'> Drag and Drop </h1>
      <ul className='box-container'>
        <li className='box box-colored' draggable='true' onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}> </li>
        <li className='box'></li>
        <li className='box'></li>
        <li className='box'></li>
        <li className='box'></li>
      </ul>
      </div>
    );
  }
}

export default App;
