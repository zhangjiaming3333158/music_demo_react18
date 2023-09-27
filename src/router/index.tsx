import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import ErrorPage from '@/views/Error'
import App from '@/App'
const Discover = lazy(() => import('@/views/Discover'))
const Mine = lazy(() => import('@/views/Mine'))
const Focus = lazy(() => import('@/views/Focus'))
const Download = lazy(() => import('@/views/Download'))

//discover子路由
const Album = lazy(() => import('@/views/Discover/c-views/album'))
const Artist = lazy(() => import('@/views/Discover/c-views/artist'))
const Djradio = lazy(() => import('@/views/Discover/c-views/djradio'))
const Recommend = lazy(() => import('@/views/Discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/Discover/c-views/songs'))
const Toplist = lazy(() => import('@/views/Discover/c-views/toplist'))

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Navigate to="discover" />,
          },
          {
            path: 'discover',
            element: <Discover />,
            children: [
              {
                path: '/discover',
                element: <Navigate to="recommend" />,
              },
              {
                path: 'album',
                element: <Album />,
              },
              {
                path: 'artist',
                element: <Artist />,
              },
              {
                path: 'djradio',
                element: <Djradio />,
              },
              {
                path: 'recommend',
                element: <Recommend />,
              },
              {
                path: 'songs',
                element: <Songs />,
              },
              {
                path: 'toplist',
                element: <Toplist />,
              },
            ],
          },
          {
            path: 'download',
            element: <Download />,
          },
          {
            path: 'focus',
            element: <Focus />,
          },
          {
            path: 'mine',
            element: <Mine />,
          },
        ],
      },
    ],
  },
]

export default createBrowserRouter(routes)
