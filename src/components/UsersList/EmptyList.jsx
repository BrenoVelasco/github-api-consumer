import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { List as ListIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { useStateValue } from '../../utils/contextManagement'
import { languages } from '../../constants/languages'

const useStyles = makeStyles({
  icon: {
    fontSize: 64,
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
  const [{ language }] = useStateValue()
  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid item xs={12}>
        <ListIcon className={classes.icon} />
        <Typography variant='h5' className={classes.message}>
          {languages.find(el => el.id === language.id).text.noResults}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default EmptyList
