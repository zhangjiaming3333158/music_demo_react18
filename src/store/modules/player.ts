import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail } from '@/service/modules/player'

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {},
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
  },
})

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  async (id: number, { dispatch }) => {
    const res = await getSongDetail(id)
    // 1.获取song
    if (!res.songs.length) return
    const song = res.songs[0]
    // 2.将song放到currentSong中
    dispatch(changeCurrentSongAction(song))
  },
)

export const { changeCurrentSongAction } = playerSlice.actions

export default playerSlice.reducer
