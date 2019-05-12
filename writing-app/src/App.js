import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
// import Prompt from './components/Prompt'
import {PROMPTS} from './shared/prompts.js'



class Prompt extends Component {

  render () {
    return (
      <div className='typing-prompt'>
        <p> {this.props.value.description}</p>
      </div>
    )
  }
}

class UserInput extends Component {

  render () {
    return (
      <div className='user-input'>
        <textarea placeholder="Enter you response here."/>
        <br/>
        <input type="submit" value="Submit Response"/>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      prompts: PROMPTS,
      curIndex: 0,
    }
  }
  renderPrompt(curIndex){
    return (
      <Prompt value={this.state.prompts[curIndex]}/>
    )
  }
  nextPrompt(curIndex){
    if (curIndex + 1 < PROMPTS.length){
      this.setState({
        curIndex: this.state.curIndex + 1
      })
    } else {
      this.setState({curIndex:0,})
    }

  }

  formerPrompt(curIndex) {
    if (curIndex === 0) {
      // change curIndex to the last index
      this.setState( {
        curIndex: PROMPTS.length - 1
      })
    } else {
      // change curIndex to the former index
      this.setState({curIndex: curIndex - 1})
    }

  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h4> Start writing today.</h4>
          <div>
          {this.renderPrompt(this.state.curIndex)}
          </div>
          <button className="former-prompt" onClick={() => this.formerPrompt(this.state.curIndex)}> Former Prompt</button>
          <button className="next-prompt" onClick={ () => this.nextPrompt(this.state.curIndex)}> Next Prompt </button>
        <UserInput/>

        </header>
        <body />
      </div>
    )
  }
}

export default App
