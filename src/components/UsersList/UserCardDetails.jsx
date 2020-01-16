import React from 'react'
import { CircularProgress, Grid, Link, Typography } from '@material-ui/core'
import {
  Check as CheckIcon,
  Close as CloseIcon,
  MyLocation as MyLocationIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { useStateValue } from '../../utils/contextManagement'
import { languages } from '../../constants/languages'

const useStyles = makeStyles(theme => ({
  headerParagraph: {
    color: '#777',
  },

  bioParagraph: {
    color: '#555',
  },

  headerParagraphSpecial: {
    fontWeight: 500,
    fontSize: '1.3em',
    color: theme.palette.primary.main,
  },

  footerText: {
    color: '#555',
    verticalAlign: 'middle',
    marginLeft: 8,
  },

  footerIcon: {
    fontWeight: 500,
    color: theme.palette.secondary.main,
  },

  footerIconRed: {
    fontWeight: 500,
    color: theme.palette.error.main,
  },
}))

const UserCardDetails = ({ userDetails }) => {
  const [{ language }] = useStateValue()
  const classes = useStyles()

  return (
    <Grid container justify='center'>
      {userDetails && userDetails.id ? (
        <>
          <Grid item xs={12} sm={6}>
            <Typography paragraph className={classes.headerParagraph}>
              <span className={classes.headerParagraphSpecial}>
                {userDetails.followers}
              </span>{' '}
              {languages.find(el => el.id === language.id).text.followers}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography paragraph className={classes.headerParagraph}>
              <span className={classes.headerParagraphSpecial}>
                {userDetails.public_repos}
              </span>{' '}
              {languages.find(el => el.id === language.id).text.publicRepos}
            </Typography>
          </Grid>
          {userDetails.bio && (
            <Grid item xs={12} style={{ marginTop: 8, marginBottom: 8 }}>
              <Typography paragraph className={classes.bioParagraph}>
                {userDetails.bio}
              </Typography>
            </Grid>
          )}
          {userDetails.company && (
            <Grid item xs={12} style={{ marginTop: 8, marginBottom: 8 }}>
              <Typography paragraph className={classes.bioParagraph}>
                <span style={{ fontWeight: 500 }}>
                  {languages.find(el => el.id === language.id).text.worksAt}{' '}
                  {userDetails.company}
                </span>
              </Typography>
            </Grid>
          )}
          {userDetails.location && (
            <Grid item xs={12} sm={6} style={{ marginTop: 8 }}>
              <Grid container alignItems='flex-start'>
                <Grid item>
                  <MyLocationIcon className={classes.footerIcon} />
                </Grid>

                <Grid item>
                  <Typography paragraph className={classes.footerText}>
                    {userDetails.location}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} sm={6} style={{ marginTop: 8 }}>
            <Grid container alignItems='flex-start'>
              <Grid item>
                {userDetails.hireable ? (
                  <CheckIcon className={classes.footerIcon} />
                ) : (
                  <CloseIcon className={classes.footerIconRed} />
                )}
              </Grid>

              <Grid item>
                <Typography paragraph className={classes.footerText}>
                  {
                    languages.find(el => el.id === language.id).text
                      .availableForHire
                  }
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justify='flex-end' style={{ marginTop: 16 }}>
            <Grid item xs={12} sm={4}>
              <Link
                href={`https://github.com/${userDetails.login}`}
                target='_blank'
                rel='noopener'
                style={{ float: 'right' }}
              >
                {languages.find(el => el.id === language.id).text.seeMoreIn}{' '}
                <span style={{ fontWeight: 600 }}>GitHub</span>
                ...
              </Link>
            </Grid>
          </Grid>
        </>
      ) : (
        <CircularProgress />
      )}
    </Grid>
  )
}

export default UserCardDetails
