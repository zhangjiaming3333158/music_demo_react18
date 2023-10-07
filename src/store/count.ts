import { createSlice, PayloadAction } from '@reduxjs/toolkit';//
import type { IRootState } from '@/store';

// 定义 slice state 的类型
interface CounterState {
  value: number;
}

// 使用该类型定义初始 state
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// selectors 等其他代码可以使用导入的 `IRootState` 类型
export const selectCount = (state: IRootState) => state.count.value;
export const AllCount = (state: IRootState) => state.count;

export default counterSlice.reducer;