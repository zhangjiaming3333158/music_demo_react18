import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 2.定义接口返回类型
interface IUserState {
  showLoginModal: boolean
  isLogin: boolean
}

// 3.定义初始值
const initialState: IUserState = {
  showLoginModal: false,
  isLogin: false,
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
    },
  },
})

// 7.导出actions
export const {
  setLoginData,
  setLoginModal
} = userSlice.actions
export default userSlice.reducer
