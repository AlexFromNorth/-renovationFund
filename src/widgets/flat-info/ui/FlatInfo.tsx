"use client";

import { FlatHeader } from "./FlatHeader";
import { FlatGallery } from "./FlatGallery";
import { FlatActions } from "./FlatActions";
import { FlatPrice } from "./FlatPrices";
import { Flat } from "../model/types";
import { Container } from "@/shared/ui/container";

interface Props {
  flat: Flat;
  isLiked: boolean;
  onToggleLike: () => void;
  on3DTour?: string; // добавьте этот пропс
}

export const FlatInfo = ({ flat, isLiked, onToggleLike }: Props) => {
  return (
    <Container>
      <h4>Главная</h4>
        <FlatHeader title={flat.title} />

        <div className="border rounded-3xl flex w-auto flex-col lg:flex-row">
          <FlatGallery images={flat.images} />

          <div className="rounded-3xl bg-white lg:bg-[var(--gray_light)] ml-8 p-6 w-[90%] lg:w-[500px]">
            <FlatPrice flat={flat} isLiked={isLiked} onToggleLike={onToggleLike} />

            <FlatActions on3DTour="/tour" />
          </div>
        </div>
    </Container>
  );
};
