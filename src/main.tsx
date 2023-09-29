import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'

import routes from './router'
import './assets/css/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  </Provider>,
)
