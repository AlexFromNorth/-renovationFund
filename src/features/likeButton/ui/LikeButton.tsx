"use client";

import { useAppDispatch, useAppSelector } from "@/shared/lib/store";
import { HeartIcon } from "@/shared/ui/icons/HeartIcon";
import { selectIsLiked, selectLikesCount } from "../model/selectors";
import { toggleLike } from "../model/slice";

interface LikeButtonProps {
  showCounter?: boolean; // флаг для показа счетчика
  initialLikes?: number; // начальное количество лайков
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const LikeButton = ({ showCounter = false, className = "", initialLikes = 0 }: LikeButtonProps) => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector(selectIsLiked);
  const likesCount = useAppSelector(selectLikesCount);

  const handleClick = () => {
    dispatch(toggleLike());
  };

  // Фактическое количество для отображения
  const displayCount = likesCount > 0 ? likesCount : initialLikes;

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg 
        transition-all duration-200
        active:scale-95 
        ${isLiked ? " border-red-200" : " border-gray-200"}
        ${className}
      `}
      aria-label={isLiked ? "Remove like" : "Add like"}
    >
      <div className="relative">
        <HeartIcon
          filled={isLiked}
          className={`
            w-8 h-8 transition-all
            ${isLiked ? "text-red-500" : "text-gray-400 hover:text-red-400"}
          `}
        />

        {showCounter && displayCount > 0 && (
          <span
            className={`
            absolute -top-2 -right-2 
            min-w-[20px] h-5 px-1
            flex items-center justify-center
            text-xs font-bold rounded-full
            transition-all duration-200
            ${isLiked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}
          `}
          >
            {displayCount > 99 ? "99+" : displayCount}
          </span>
        )}
      </div>
    </button>
  );
};
