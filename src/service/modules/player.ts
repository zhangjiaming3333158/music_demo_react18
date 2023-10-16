import request from "@/service";

export function getSongDetail(ids: number) {
  return request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getSimiPlaylist(id: number) {
  return request.get({
    url: '/simi/playlist',
    params: {
      id
    }
  })
}

export function getSimiSong(id: number) {
  return request.get({
    url: '/simi/song',
    params: {
      id
    }
  })
}