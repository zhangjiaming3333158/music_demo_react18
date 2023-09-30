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
      {
        path: '/discover/songs',
        element: <Songs />,
        title: '歌单'
      },
      {
        path: '/discover/djradio',
        element: <Djradio />,
        title: '主播电台'
      },
      {
        path: '/discover/artist',
        element: <Artist />,
        title: '歌手'
      },
      {
        path: '/discover/album',
        element: <Album />,
        title: '专辑'
      },
    ],
  },
  {
    path: '/mine',
    element: <Mine />,
    title: '我的音乐'
  },
  {
    path: '/focus',
    element: <Focus />,
    title: '关注'
  },
  {
    path: '/download',
    element: <Download />,
    title: '下载客户端'
  },
]

export default routes
