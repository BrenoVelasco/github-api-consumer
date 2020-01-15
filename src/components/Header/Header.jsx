import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchInput from './SearchInput.jsx'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
    height: 300,
    marginBottom: 32,
  },

  containerTitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 40,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
}))

const Header = ({ search, query, setQuery }) => {
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
        <span style={{ fontWeight: 600 }}>GitHub</span> nas suas mãos.
      </Typography>

      <Grid container justify='center'>
        <Grid item xs={11} sm={9} lg={8}>
          <SearchInput search={search} query={query} setQuery={setQuery} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
