import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
// import Prompt from './components/Prompt'
import {PROMPTS} from './shared/prompts.js'

class Prompt extends Component {
  
  render () {
    return (
      <div className='display-prompt'>
        <p> {this.props.value.description}</p>
      </div>
    )
  }
}

class UserInput extends Component {

  render () {
    return (
      <div className='user-input'>
        <textarea placeholder="Enter you response here."></textarea>
        <br></br>
        <input type="submit" value="Submit Response"></input>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      prompts: PROMPTS,
      curIndex: 0,
    }
  }
  renderPrompt(curIndex){
    return (
      <Prompt value={this.state.prompts[curIndex]}></Prompt>
    )
  }
  shuffle(curIndex){
    if (curIndex + 1 < PROMPTS.length){
      this.setState({
        curIndex: this.state.curIndex + 1
      })
    } else {
      this.setState({curIndex:0,})
    }

  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h4> Start writing today.</h4>
          {this.renderPrompt(this.state.curIndex)}
          <button className="shuffle" onClick={ () => this.shuffle(this.state.curIndex)}> Change Prompt </button>
          <UserInput></UserInput>
        </header>
        <body />
      </div>
    )
  }
}

export default App
