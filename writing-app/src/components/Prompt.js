import React, { Component } from 'react'
import { PROMPTS } from '../shared/prompts'
import PromptButton from './button.js'
import PromptBody from './PromptBody'
import Grid from '@material-ui/core/Grid'

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
      <Grid container wrap='nowrap' spacing={16}>
        <PromptBody value={this.state.curPrompt} />

        <Grid item sm={2}>
          <PromptButton btnName={'prev'} onClick={() => this.prevPrompt()} />
          <PromptButton btnName={'next'} onClick={() => this.nextPrompt()} />
        </Grid>
      </Grid>
    )
  }
}

export default Prompt
