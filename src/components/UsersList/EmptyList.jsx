import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { List as ListIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  icon: {
    fontSize: 72,
    color: '#999',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },

  message: {
    color: '#999',
    textAlign: 'center',
    fontWeight: 400,
  },
})

const EmptyList = () => {
  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid item xs={12}>
        <ListIcon className={classes.icon} />
        <Typography variant='h4' className={classes.message}>
          Nenhum resultado. Use a busca acima para encontrar usuários!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default EmptyList
