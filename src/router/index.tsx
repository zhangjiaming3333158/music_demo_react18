import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/Discover'))
const Recommend = lazy(() => import('@/views/Discover/c-views/recommend'))
const Ranking = lazy(() => import('@/views/Discover/c-views/ranking'))
const Mine = lazy(() => import('@/views/Mine'))
const Download = lazy(() => import('@/views/Download'))

const routes: RouteObject[] & any = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    title: '发现音乐',
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
        title: '推荐'
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
        title: '排行榜'
      },
    ],
  },
  {
    path: '/mine',
    element: <Mine />,
    title: '我的音乐'
  },
  {
    path: '/download',
    element: <Download />,
    title: '下载客户端'
  },
]

export default routes
