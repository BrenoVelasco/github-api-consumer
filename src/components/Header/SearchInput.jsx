import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { useStateValue } from '../../utils/contextManagement'
import { languages } from '../../constants/languages'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 10px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}))

const SearchInput = ({ search, query, setQuery }) => {
  const [{ language }] = useStateValue()
  const classes = useStyles()

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      search()
    }
  }

  return (
    <Paper className={classes.root} onKeyPress={handleKeyPress}>
      <InputBase
        className={classes.input}
        placeholder={`${
          languages.find(el => el.id === language.id).text
            .searchInputPlaceholder
        }`}
        inputProps={{ 'aria-label': 'search GitHub' }}
        onChange={event => setQuery(event.target.value)}
      />
      <IconButton
        className={classes.iconButton}
        aria-label='search'
        onClick={search}
        disabled={!query}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput
