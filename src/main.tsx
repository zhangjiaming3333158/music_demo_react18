import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

import './assets/css/index.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
)
