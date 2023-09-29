import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './count';// 从 src/store/count.ts 导入 reducer

const store = configureStore({
  reducer: {
    count: counterReducer,// 将 countReducer 作为 count slice 的 reducer
  },
});

// 从 store 本身推断 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断类型：{posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;// 导出 store