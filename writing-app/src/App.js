import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Start writing today.</p>
        </header>
        <body>
          <p>Write a short story where the main characte is a "House".</p>
        </body>
      </div>
    )
  }
}

export default App
