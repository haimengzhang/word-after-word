import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Prompt from './components/Prompt'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h4> Start writing today.</h4>
        </header>
        <body>
          <Prompt />
        </body>
      </div>
    )
  }
}

export default App
