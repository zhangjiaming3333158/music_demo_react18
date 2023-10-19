import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'
import ThemeProvider from '@/theme/provider'
import ThemeProviderStyle from '@/theme/style-component'
// import theme from './assets/theme/theme.ts'
// import { ThemeProvider } from 'styled-components'

import './assets/css/index.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProviderStyle>
      <ThemeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
      </ThemeProviderStyle>
    </React.StrictMode>
  </Provider>,
)
