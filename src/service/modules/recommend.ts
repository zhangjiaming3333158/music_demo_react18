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

// 推荐歌单分类
export function getRecommendSongsCategory() {
  return request.get({
    url: '/playlist/hot'
  })
}


// 调用此接口,可获取歌单分类,包含 category 信息
export function getHotCategory () {
  return request.get({
    url: '/playlist/hot'
  })
}


// 调用此接口 , 可获取网友精选碟歌单
export function getSongList () {
  
}
