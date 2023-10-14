import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// 1.导入接口
import {
  getArtistList,
  getAnchorList,
  getBanners,
  getRecommendSongs,
  getNewAlbum,
  getPlaylistDetail,
  getTopList,
} from '@/service/modules/recommend'

// 2.定义接口返回类型
interface IRecommendState {
  artistList: []
  anchorList: []
  banners: []
  recommendSongs: []
  recommendSongList: []
  rankings: []
  topList: []
}

// 3.定义初始值
const initialState: IRecommendState = {
  artistList: [],
  anchorList: [],
  banners: [],
  recommendSongs: [],
  recommendSongList: [],
  rankings: [],
  topList: [],
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  // 5.定义reducers->set
  reducers: {
    setArtistListData(state, { payload }) {
      state.artistList = payload
    },
    setAnchorListData(state, { payload }) {
      state.anchorList = payload
    },
    setBannerData(state, { payload }) {
      state.banners = payload
    },
    setRecommendSongsData(state, { payload }) {
      state.recommendSongs = payload
    },
    setNewAlbumData(state, { payload }) {
      state.recommendSongList = payload
    },
    setRankingsData(state, { payload }) {
      state.rankings = payload
    },
    setTopListData(state, { payload }) {
      state.topList = payload
    },
  },
})
// 6.定义异步actions
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    dispatch(setBannerData(res.banners))
  },
)

export const fetchRecommendSongsDataAction = createAsyncThunk(
  'recommendSongSlice',
  async (_, { dispatch }) => {
    const res = await getRecommendSongs(8)
    dispatch(setRecommendSongsData(res.result))
  },
)

export const fetchNewAlbumDataAction = createAsyncThunk(
  'recommendSongs',
  async (_, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(setNewAlbumData(res.albums))
  },
)
const rankingIds = [19723756, 3779629, 2884035] // 云音乐飙升榜、云音乐新歌榜、网易原创歌曲榜
export const fetchRankingsDataAction = createAsyncThunk(
  'rankings',
  async (_, { dispatch }) => {
    const res = await Promise.all(rankingIds.map((id) => getPlaylistDetail(id)))
    dispatch(setRankingsData(res))
  },
)

export const fetchArtistListDataAction = createAsyncThunk(
  'artistList',
  async (_, { dispatch }) => {
    const res = await getArtistList(5)
    dispatch(setArtistListData(res.artists))
  },
)

export const fetchTopListDataAction = createAsyncThunk(
  'topList',
  async (_, { dispatch }) => {
    const res = await getTopList()
    dispatch(setTopListData(res.list))
  },
)

export const fetchAnchorListDataAction = createAsyncThunk(
  'anchorList',
  async (_, { dispatch }) => {
    const res = await getAnchorList(10)
    dispatch(setAnchorListData(res.data.list))
  },
)

// 7.导出actions
export const {
  setBannerData,
  setRecommendSongsData,
  setNewAlbumData,
  setRankingsData,
  setArtistListData,
  setTopListData,
  setAnchorListData,
} = recommendSlice.actions
export default recommendSlice.reducer
