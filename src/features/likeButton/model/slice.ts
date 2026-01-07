import { createSlice } from '@reduxjs/toolkit';
import type { HeaderState } from './types';

const initialState: HeaderState = {
  isLiked: false,
  likesCount: 0, // добавляем счетчик
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleLike: (state) => {
      state.isLiked = !state.isLiked;
      // Обновляем счетчик
      if (state.isLiked) {
        state.likesCount += 1;
      } else {
        state.likesCount = Math.max(0, state.likesCount - 1); // не меньше 0
      }
    },
    // Можно добавить редьюсер для установки начального значения
    setLikesCount: (state, action) => {
      state.likesCount = action.payload;
    },
  },
});

export const { toggleLike, setLikesCount } = headerSlice.actions;
export default headerSlice.reducer;