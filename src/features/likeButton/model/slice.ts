// src/widgets/header/model/slice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { HeaderState } from './types';

const initialState: HeaderState = {
  isLiked: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleLike: (state) => {
      state.isLiked = !state.isLiked;
    },

  },
});

export const { toggleLike } = headerSlice.actions;
export default headerSlice.reducer;