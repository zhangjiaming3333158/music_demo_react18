import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

import recommendReducer from './modules/recommend';
import playerReducer from './modules/player';
import themeReducer from './modules/theme';
import userReducer from './modules/user';

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer,
    theme: themeReducer,
    user: userReducer,
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
