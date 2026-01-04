// src/widgets/header/ui/LikeButton.tsx
"use client";

import { useAppDispatch, useAppSelector } from "@/shared/lib/store";
import { HeartIcon } from "@/shared/ui/icons/HeartIcon";
import { selectIsLiked } from "../model/selectors";
import { toggleLike } from "../model/slice";

export const LikeButton = () => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector(selectIsLiked);

  const handleClick = () => {
    dispatch(toggleLike());
  };

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg 
        transition-all duration-200
        active:scale-95
        ${isLiked 
          ? "bg-red-50 border-red-200 " 
          : "bg-white"
        }
      `}
      aria-label={isLiked ? "Remove like" : "Add like"}
    >
      <HeartIcon
        filled={isLiked}
        className={`
          w-5 h-5 transition-all
          ${isLiked 
            ? "text-red-500 animate-pulse" 
            : "text-red-500 hover:text-gray-600"
          }
        `}
      />
    </button>
  );
};