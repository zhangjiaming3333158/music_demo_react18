import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// 1.导入接口
import {
  getBanners,
  getRecommendSongs,
  getNewAlbum,
} from '@/service/modules/recommend'

// 2.定义接口返回类型
interface IRecommendState {
  banners: []
  recommendSongs: []
  recommendSongList: []
}

// 3.定义初始值
const initialState: IRecommendState = {
  banners: [],
  recommendSongs: [],
  recommendSongList: [],
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  // 5.定义reducers->set
  reducers: {
    setBannerData(state, { payload }) {
      state.banners = payload
    },
    setRecommendSongsData(state, { payload }) {
      state.recommendSongs = payload
    },
    setNewAlbumData(state, { payload }) {
      state.recommendSongList = payload
    },
  },
})
// 6.定义异步actions
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(setBannerData(res.banners))
  },
)

export const fetchRecommendSongsDataAction = createAsyncThunk(
  'recommendSongSlice',
  async (arg, { dispatch }) => {
    const res = await getRecommendSongs(8)
    dispatch(setRecommendSongsData(res.result))
  },
)

export const fetchNewAlbumDataAction = createAsyncThunk(
  'recommendSongs',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(setNewAlbumData(res.recommend))
  },
)

// 7.导出actions
export const {
  setBannerData,
  setRecommendSongsData,
  setNewAlbumData,
} = recommendSlice.actions
export default recommendSlice.reducer
