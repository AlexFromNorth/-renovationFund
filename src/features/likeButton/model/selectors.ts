import { RootState } from "@/app/store/store";

export const selectIsLiked = (state: RootState) => 
  state.header.isLiked;

export const selectLikesCount = (state: RootState) => 
  state.header.likesCount;