import * as React from 'react'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ApplicationContainer from './ApplicationContainer'
import theme from './theme'
import './styles/css/index.css'

/**
 * Application layer that handles global style
 */
const ApplicationStyle = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <ApplicationContainer />
      </ThemeProvider>
    </CssBaseline>
  )
}

export default ApplicationStyle
