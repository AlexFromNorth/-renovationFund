// src/widgets/header/ui/LikeButton.tsx (с HeartIcon)
"use client";

import { cn, useAppDispatch, useAppSelector } from "@/shared/lib/store";
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
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg",
        "border border-gray-300 dark:border-gray-700",
        "hover:bg-gray-50 dark:hover:bg-gray-800",
        "transition-all duration-200",
        "active:scale-95"
      )}
      aria-label={isLiked ? "Remove like" : "Add like"}
    >
      <HeartIcon
        filled={isLiked}
        className={cn("w-5 h-5 transition-all", isLiked ? "text-red-500 animate-pulse" : "text-gray-500 hover:text-red-500")}
      />
    </button>
  );
};
