import { ThemeOptions } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

import { Themes } from './types'

export const sharedTheme = {
  palette: {
    background: {
      default: '#fafafa',
      paper: '#fff'
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%'
        }
      }
    }
  }
} as ThemeOptions // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#fafafa',
        base: '#f9f9f9',
        paper: '#fff',
        hover: '#f4f4f4',
        border: '#e9e9e9',
        even: '#f9f9f9',
        odd: '#f4f2f2',
        login: '#f4f4f4'
      },
      color: {
        default: '#000',
        middle: '#333',
        secondary: '#b3b3b3'
      },
      primary: {
        main: '#C20C0C',
        red:'#c3473a',
        base: '#000'
      }
    }
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111',
        base: '#242424',
        paper: '#171717',
        hover: '#333',
        border: '#333',
        even: '#242424',
        odd: '#333',
        login: '#3c3c3c'
      },
      color: {
        default: '#fff',
        middle: '#d3d3d3',
        secondary: '#b3b3b3'
      },
      primary: {
        main: '#C20C0C',
        red:'#c3473a',
        base: '#000'
      }
    }
  })
}

export default themes
