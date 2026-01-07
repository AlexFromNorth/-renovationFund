// src/widgets/header/model/types.ts
export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export interface HeaderState {
  isLiked: boolean;
  likesCount: number; // добавляем поле
}
