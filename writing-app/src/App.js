import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Prompt from './components/Prompt'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <h4>Start writing today.</h4>
        <Prompt />
      </div>
    )
  }
}

export default App
