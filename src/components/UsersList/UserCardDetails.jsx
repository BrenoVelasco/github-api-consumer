import React from 'react'
import { CircularProgress, Grid, Link, Typography } from '@material-ui/core'
import {
  Check as CheckIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
  Email as EmailIcon,
  MyLocation as MyLocationIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

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
              seguidores
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography paragraph className={classes.headerParagraph}>
              <span className={classes.headerParagraphSpecial}>
                {userDetails.public_repos}
              </span>{' '}
              repositórios públicos
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
                  Trabalha na {userDetails.company}
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
                  Disponível para contratação
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
                Ver mais em <span style={{ fontWeight: 600 }}>GitHub</span>
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
