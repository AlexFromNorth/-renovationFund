// src/widgets/header/model/selectors.ts

import { RootState } from "@/app/store/store";

export const selectIsLiked = (state: RootState) => 
  state.header.isLiked;