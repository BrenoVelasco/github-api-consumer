import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#0456A8',
    main: '#0575e6',
    light: '#499AEC',
  },
  secondary: {
    contrastText: white,
    dark: '#00B146',
    main: '#00f260',
    light: '#45F58B',
  },
  success: {
    contrastText: white,
    dark: '#00B146',
    main: '#00f260',
    light: '#45F58B',
  },
  info: {
    contrastText: white,
    dark: '#0456A8',
    main: '#0575e6',
    light: '#499AEC',
  },
  warning: {
    contrastText: white,
    dark: '#B29F32',
    main: '#F4DA44',
    light: '#F7E477',
  },
  error: {
    contrastText: white,
    dark: '#874141',
    main: '#B45656',
    light: '#F77676',
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
}
