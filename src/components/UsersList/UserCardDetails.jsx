import React from 'react'
import { Grid } from '@material-ui/core'

const UserCardDetails = ({ userDetails }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {JSON.stringify(userDetails)}
      </Grid>
    </Grid>
  )
}

export default UserCardDetails
