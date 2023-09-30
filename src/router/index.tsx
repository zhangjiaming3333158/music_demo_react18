import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/Discover'))
const Recommend = lazy(() => import('@/views/Discover/c-views/recommend'))
const Ranking = lazy(() => import('@/views/Discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/Discover/c-views/songs'))
const Djradio = lazy(() => import('@/views/Discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/Discover/c-views/artist'))
const Album = lazy(() => import('@/views/Discover/c-views/album'))

const Mine = lazy(() => import('@/views/Mine'))
const Focus = lazy(() => import('@/views/Focus'))
const Download = lazy(() => import('@/views/Download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes