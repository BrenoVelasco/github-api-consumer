import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#0E3951',
    main: '#134E6F',
    light: '#537E96',
  },
  secondary: {
    contrastText: white,
    dark: '#138C91',
    main: '#1AC0C6',
    light: '#58D1D5',
  },
  success: {
    contrastText: white,
    dark: '#3D6E3C',
    main: '#539652',
    light: '#74b574',
  },
  info: {
    contrastText: white,
    dark: '#34515e',
    main: '#607d8b',
    light: '#8eacbb',
  },
  warning: {
    contrastText: white,
    dark: '#c79100',
    main: '#FFC107',
    light: '#fff350',
  },
  error: {
    contrastText: white,
    dark: '#BA473B',
    main: '#ff6150',
    light: '#FF8C7F',
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
