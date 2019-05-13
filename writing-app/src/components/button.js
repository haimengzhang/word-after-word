import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const styles = {
  fab: {
    marginRight: 8,
    boxShadow: '0 3px 5px 2px rgba(200, 105, 135, .3)',
    color: 'black'
  }
}

function PromptButton (props) {
  const { btnName, onClick, classes } = props
  var name = btnName
  return (
    <Fab color='gray' className={classes.fab} onClick={onClick}>
      {name === 'next' ? <ShuffleIcon /> : <ArrowBackIcon />}
    </Fab>
  )
}

PromptButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PromptButton)
