import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

import counterReducer from './count';// 从 src/store/count.ts 导入 reducer
import recommendReducer from './modules/recommend';
import playerReducer from './modules/player';

const store = configureStore({
  reducer: {
    count: counterReducer,// 将 countReducer 作为 count slice 的 reducer
    recommend: recommendReducer,
    player: playerReducer,
  },
});


type GetStoreStateType = typeof store.getState
export type IRootState = ReturnType<GetStoreStateType>
type DispatchType = typeof store.dispatch

// 指定类型
export const useMusicSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useMusicDispatch: () => DispatchType = useDispatch
export const shallowEqualMusic = shallowEqual
export default store
