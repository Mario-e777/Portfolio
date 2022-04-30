import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

interface CounterState {
  value: number
};

const initialState = {
  value: 0
} as CounterState;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
