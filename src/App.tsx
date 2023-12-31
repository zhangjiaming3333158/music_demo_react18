import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import Player from './views/Player'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="content">
        <Suspense fallback="loading">
          {/* <RouterProvider router={routes} /> */}
          <div className="router">{useRoutes(routes)}</div>
        </Suspense>
      </div>
      <Player />
      <AppFooter />
    </div>
  )
}

export default App
