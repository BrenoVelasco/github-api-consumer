import React, { useState, useRef } from 'react'
import {
  Button,
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchInput from './SearchInput.jsx'
import { useStateValue } from '../../utils/contextManagement'
import { SET_LANGUAGE } from '../../constants/reducers'
import { languages } from '../../constants/languages'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
    height: 300,
    marginBottom: 32,
    position: 'relative',
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

  language: {
    position: 'absolute',
    right: 16,
    top: 16,
    color: '#fff',
  },
}))

const Header = ({ search, query, setQuery }) => {
  const [{ language }, dispatch] = useStateValue()
  const classes = useStyles()
  const anchorRef = useRef(null)

  const [openSelect, setOpenSelect] = useState(false)

  const handleMenuItemClick = (id, name) => {
    dispatch({
      type: SET_LANGUAGE,
      value: {
        id: id,
        name: name,
      },
    })

    setOpenSelect(false)
  }

  const handleSelectClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpenSelect(false)
  }

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.container}
    >
      <Button
        ref={anchorRef}
        className={classes.language}
        onClick={() => setOpenSelect(!openSelect)}
      >
        {language.name}
      </Button>
      <Popper
        open={openSelect}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement='bottom-end'
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleSelectClose}>
                <MenuList id='split-button-menu'>
                  {languages.map(language => (
                    <MenuItem
                      id={language.id}
                      key={language.id}
                      value={language.name}
                      onClick={() =>
                        handleMenuItemClick(language.id, language.name)
                      }
                    >
                      {language.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Typography variant='h1' className={classes.containerTitle}>
        <span style={{ fontWeight: 600 }}>GitHub</span>{' '}
        {languages.find(el => el.id === language.id).text.title}
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
