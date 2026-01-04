// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "@/features/likeButton/model/slice";
import flatInfoReducer from '@/features/flat-info/model/slice';


export const store = configureStore({
  reducer: {
    header: headerReducer,
    flatInfo: flatInfoReducer,
    // здесь будут другие редьюсеры
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
