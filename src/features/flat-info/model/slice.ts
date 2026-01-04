import { RootState } from '@/app/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlatInfoState {
  liked: Record<string, boolean>;
}

const initialState: FlatInfoState = { liked: {} };

const flatInfoSlice = createSlice({
  name: 'flatInfo', // <-- это имя будет ключом в store
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.liked[id] = !state.liked[id];
    },
  },
});

export const { toggleLike } = flatInfoSlice.actions;

// селектор
export const selectIsLiked = (id: string) => (state: RootState) =>
  state.flatInfo.liked[id] ?? false;

export default flatInfoSlice.reducer;
