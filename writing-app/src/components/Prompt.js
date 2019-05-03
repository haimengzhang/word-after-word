import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import '../styles/typing-prompt.css'
import { PROMPTS } from '../shared/prompts'
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles({
  shuffle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
})

class ToggleButton extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { onPress, buttonName } = this.props
    var name = buttonName

    return (
      <Fab color='primary' className={useStyles.shuffle} onClick={onPress}>
        {name === 'Next' ? <ShuffleIcon /> : <ArrowBackIcon />}
      </Fab>
    )
  }
}

class Prompt extends Component {
  constructor (props) {
    super(props)
    this.state = {
      curPrompt: PROMPTS[0].description,
      curIndex: 0
    }
  }

  nextPrompt = () => {
    // This syntax ensures `this` is bound within nexPrompt.
    // Warning: this is *experimental* syntax
    // Reference: https://reactjs.org/docs/handling-events.html
    if (this.state.curIndex + 1 < PROMPTS.length) {
      this.setState({
        curIndex: this.state.curIndex + 1,
        curPrompt: PROMPTS[this.state.curIndex].description
      })
    } else {
      this.setState({
        curIndex: 0,
        curPrompt: PROMPTS[this.state.curIndex].description
      })
    }
  }

  prevPrompt = () => {
    // This syntax ensures `this` is bound within prevPrompt.
    // Warning: this is *experimental* syntax
    if (this.state.curIndex === 0) {
      // change curIndex to the last index
      this.setState({
        curIndex: PROMPTS.length - 1,
        curPrompt: PROMPTS[this.state.curIndex].description
      })
    } else {
      // change curIndex to the former index
      this.setState({
        curIndex: this.state.curIndex - 1,
        curPrompt: PROMPTS[this.state.curIndex].description
      })
    }
  }

  render () {
    return (
      <div className='typing-prompt'>
        <p> {this.state.curPrompt} </p>
        <div>
          <ToggleButton buttonName={'Previous'} onPress={this.prevPrompt} />
          <ToggleButton buttonName={'Next'} onPress={this.nextPrompt} />
        </div>
      </div>
    )
  }
}

export default Prompt
