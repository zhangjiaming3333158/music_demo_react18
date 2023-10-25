import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getUserInfo,
  getUserSubInfo,
  getUserLevel,
} from '@/service/modules/login'

// 2.定义接口返回类型
interface IUserState {
  showLoginModal: boolean
  isLogin: boolean
  userInfo?: any
}

// 3.定义初始值
const initialState: IUserState = {
  showLoginModal: false,
  isLogin: JSON.parse(localStorage.getItem('isLogin') || 'false'),
  userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  // 5.定义reducers->set
  reducers: {
    setLoginModal(state) {
      state.showLoginModal = state.showLoginModal ? false : true
    },
    setLoginData(state, { payload }) {
      state.isLogin = payload
      localStorage.setItem('isLogin', JSON.stringify(payload))
    },
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    }
  },
})

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (_, { dispatch }) => {
    const result = await Promise.all([
      getUserInfo(),
      getUserSubInfo(),
      getUserLevel(),
    ])
    let info = {}
    result.forEach((item) => {
      Object.assign(info, item)
    })
    dispatch(setUserInfo(info))
    localStorage.setItem('userInfo', JSON.stringify(info))
  },
)

// 7.导出actions
export const { setLoginData, setLoginModal,setUserInfo } = userSlice.actions
export default userSlice.reducer
