"use client";

import { useState } from "react";
import { Flat } from "../model/types";
import { ToggleSwitch } from "@/shared/ui/toggle-switch";
import { LikeButton } from "@/features/likeButton";

interface Props {
  flat: Flat;
  isLiked: boolean;
  onToggleLike: () => void;
}

export const FlatPrice = ({ flat, isLiked, onToggleLike }: Props) => {
  const [discountActive, setDiscountActive] = useState(false);

  if (!flat) return null;

  const displayedTotal =
    discountActive && flat.discount ? Math.round(flat.totalPrice * (1 - flat.discount / 100)) : flat.totalPrice;

  const displayedM2 = discountActive && flat.discount ? Math.round(flat.m2Price * (1 - flat.discount / 100)) : flat.m2Price;

  const format = (v: number) => v.toLocaleString("ru-RU") + " ₽";

  return (
    <div className=" p-4 space-y-4 text-[var(--gray_secondary)] ">
      {/* Заголовок и лайк */}

      <div className="flex justify-between items-start text-[var(--text_primary)]">
        <div className="flex relative items-center">
          <span className="!text-[20px] mr-4">
            {flat.rooms} комн. {flat.area} м²
          </span>
          <div className="">
            {flat.building} / {flat.floor}
          </div>
          <LikeButton active={isLiked} onClick={onToggleLike} className="!p-2" />
        </div>
      </div>

      {/* Адрес */}
      <div className="text-[var(--text_primary)]">{flat.address}</div>

      {/* Метро */}
      <div className="flex gap-2 mt-2">
        {flat.metro.map((m, i) => (
          <div key={i} className="flex items-center gap-text-sm">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <span>{m.name}</span>
            <span className="mr-2">🚶 {m.foot}</span>
            <span className="mr-2">🚗 {m.car}</span>
          </div>
        ))}
      </div>

      {/* Особенности */}
      <div className="mt-2">
        <span className="mb-1 !font-normal">Особенности: </span>
        {flat.features.map((f, i) => (
          <span key={i} className="px-2 py-1 border rounded text-sm mx-1 text-[var(--gray_secondary)]">
            {f}
          </span>
        ))}
      </div>

      {/* Условия покупки */}
      <div className="space-y-1 text-sm mt-2">
        {flat.mortgage && (
          <div>
            <span className="!font-normal">Ипотека: </span>
            {flat.mortgage.map((date, i, array) => (
              <span key={i}>
                {date}
                {i < array.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
        {flat.status && (
          <div>
            <span className="!font-normal">Условия покупки: </span> {flat.status}
          </div>
        )}
        {flat.bookingUntil && (
          <div>
            <span className="!font-normal">Доступно для бронирования: </span> {flat.bookingUntil}
          </div>
        )}
        {flat.article && (
          <div>
            <span className="!font-normal">Артикул: </span> {flat.article}
          </div>
        )}
      </div>

      {/* Цена */}
      <div className="flex gap-4 items-center mt-2 justify-between">
        <div>
          <div className="text-[var(--text_primary)]">{format(displayedTotal)}</div>
          <div className="">{format(displayedM2)}/м²</div>
        </div>
        <div className=""></div>
        <div className="flex flex-col items-center">
          {!discountActive ? (
            <span className="text-[var(--text_primary)]">Акция: </span>
          ) : (
            <span className="text-[var(--text_primary)]">Скидка применена:</span>
          )}

          {flat.discount && (
            <div
              onClick={() => setDiscountActive(!discountActive)}
              className={`px-3 py-1  text-sm ${discountActive ? "text-white" : ""}`}
            >
              {" "}
              <ToggleSwitch initial={false} onChange={(state) => console.log("Текущий статус:", state)} />
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-green-800 font-bold">Скидка {flat.discount}%</span>
          <span>Рассчитать скидку</span>
        </div>
      </div>
      {!discountActive && <span>Скидка действительна при 100% оплате и ипотеке</span>}
    </div>
  );
};
