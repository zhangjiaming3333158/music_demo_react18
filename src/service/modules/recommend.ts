import request from '@/service'

// 获取轮播图
export function getBanners() {
  return request.get({
    url: '/banner'
  })
}

// 获取推荐歌单
export function getRecommendSongs(limit = 8) {
  return request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 获取新碟上架
export function getNewAlbum() {
  return request.get({
    url: '/album/newest'
  })
}

// 获取榜单
export function getPlaylistDetail(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
