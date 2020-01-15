import React from 'react'
import {
  Avatar,
  ExpansionPanel,
  ExpansionPanelSummary,
  Grid,
  LinearProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  loadingTitle: {
    height: 8,
    width: '50%',
    maxWidth: 250,
  },

  loadingExpandIcon: {
    height: 8,
    width: 24,
  },

  colorPrimary: {
    backgroundColor: '#ccc',
  },

  barColorPrimary: {
    backgroundColor: '#ddd',
  },

  avatar: {
    marginRight: 16,
  },
})

const UserCardsLoading = ({ pagination }) => {
  const classes = useStyles()

  return (
    <>
      {[...Array(pagination)].map((el, index) => (
        <ExpansionPanel key={index}>
          <ExpansionPanelSummary
            expandIcon={
              <LinearProgress
                className={classes.loadingExpandIcon}
                classes={{
                  colorPrimary: classes.colorPrimary,
                  barColorPrimary: classes.barColorPrimary,
                }}
              />
            }
            aria-controls='expansion-panels-loading'
            id={index}
          >
            <Grid container alignItems='center'>
              <Avatar className={classes.avatar} />
              <LinearProgress
                className={classes.loadingTitle}
                classes={{
                  colorPrimary: classes.colorPrimary,
                  barColorPrimary: classes.barColorPrimary,
                }}
              />
            </Grid>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      ))}
    </>
  )
}

export default UserCardsLoading
