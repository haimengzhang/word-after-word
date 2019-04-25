import React, { Component } from 'react'
import '../styles/typing-prompt.css'


class Prompt extends Component {
  render () {
    return (
      <div className='typing-prompt'>
        <p> {this.props.value.description}</p>     
      </div>
    )
  }
}
export default Prompt
