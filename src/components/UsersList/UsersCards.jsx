import React from 'react'
import {
  Avatar,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Typography,
} from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import EmptyList from './EmptyList'
import UsersCardsLoading from './UsersCardsLoading'
import UserCardDetails from './UserCardDetails'

const useStyles = makeStyles({
  avatar: {
    marginRight: 16,
  },
})

const UsersCards = ({ users, statusRequestUsers, pagination }) => {
  const classes = useStyles()

  const renderUsersCards = () => {
    if (users.length > 0 && !statusRequestUsers.isLoading) {
      return users.map(user => (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${user.id}-content`}
            id={user.id}
          >
            <Grid container alignItems='center'>
              <Avatar
                alt={`Avatar do login ${user.login}`}
                src={user.avatar_url}
                className={classes.avatar}
              />
              <Typography variant='h5'>{user.login}</Typography>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UserCardDetails />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))
    } else if (statusRequestUsers.isLoading) {
      return <UsersCardsLoading pagination={pagination} />
    } else {
      return <EmptyList />
    }
  }

  return (
    <Grid container justify='center'>
      <Grid item xs={11} sm={9} lg={8}>
        {renderUsersCards()}
      </Grid>
    </Grid>
  )
}

export default UsersCards
