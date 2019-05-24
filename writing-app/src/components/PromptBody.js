import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  text: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    textAlign: 'center',
    margin: 8
  }
})

function PromptBody (props) {
  const { value, classes } = props
  return (
    <Grid item sm={10} className={classes.text}>
      <Typography variant='headline'>{value}</Typography>
    </Grid>
  )
}

PromptBody.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PromptBody)
