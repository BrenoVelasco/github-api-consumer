import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchInput from './SearchInput.jsx'

const useStyles = makeStyles({
  container: {
    width: '100%',
    background:
      'linear-gradient(90deg, rgba(0,242,96,1) 0%, rgba(5,117,230,1) 100%)',
    height: 300,
  },

  containerTitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.container}
    >
      <Typography variant='h1' className={classes.containerTitle}>
        GitHub nas suas mãos.
      </Typography>

      <Grid container justify='center'>
        <Grid item xs={11} sm={9} lg={8}>
          <SearchInput />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
