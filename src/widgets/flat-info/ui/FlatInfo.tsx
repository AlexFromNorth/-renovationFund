"use client";

import { useState } from "react";
import Image from "next/image";
import { Flat } from "@/entities/flat-info/model/types";

interface FlatInfoProps {
  flat: Flat;
  isLiked: boolean;
  onToggleLike: () => void;
  on3DTour?: string;
}

export const FlatInfo = ({ flat, isLiked, onToggleLike, on3DTour }: FlatInfoProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [discountActive, setDiscountActive] = useState(false);

  const formatPrice = (value: number) => value.toLocaleString("ru-RU") + " ₽";

  const displayedTotal =
    discountActive && flat.discount ? Math.round(flat.totalPrice * (1 - flat.discount / 100)) : flat.totalPrice;

  const displayedM2 = discountActive && flat.discount ? Math.round(flat.m2Price * (1 - flat.discount / 100)) : flat.m2Price;

  return (
    <div className="flat-card border rounded-md p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold">{flat.title}</h2>
        <button onClick={onToggleLike} className={`text-2xl ${isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}>
          ♥
        </button>
      </div>

      {/* Основная информация */}
      <div className="flex justify-between mt-2">
        <div>
          <div>
            {flat.rooms} комн., {flat.area} м²
          </div>
          <div>
            {flat.building} / {flat.floor}
          </div>
          <div>{flat.address}</div>
        </div>
        <div>
          {flat.metro.map((m, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              <span>
                {m.name}, {m.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Фичи */}
      <div className="mt-2 flex flex-wrap gap-2">
        {flat.features.map((f, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-700 text-sm px-2 py-1 rounded">
            {f}
          </div>
        ))}
      </div>

      {/* Цены */}
      <div className="mt-4 flex items-center gap-4">
        <div>
          <div>Итого: {formatPrice(displayedTotal)}</div>
          <div>м²: {formatPrice(displayedM2)}</div>
        </div>
        {flat.discount && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDiscountActive(!discountActive)}
              className={`px-2 py-1 border rounded ${discountActive ? "bg-blue-600 text-white" : ""}`}
            >
              Рассчитать скидку
            </button>
            {discountActive && <div>Скидка {flat.discount}%</div>}
          </div>
        )}
      </div>

      {/* Таб-галерея */}
      <div className="mt-4 flex gap-2">
        {flat.images.map((img) => (
          <div
            key={img.id}
            className={`cursor-pointer p-1 border ${activeTab === img.id ? "border-blue-500" : ""}`}
            onClick={() => setActiveTab(img.id)}
          >
            <Image src={img.src} alt={img.alt || "plan"} width={100} height={80} className={img.locked ? "opacity-50" : ""} />
          </div>
        ))}
      </div>

      {/* Кнопки действий */}
      <div className="mt-4 flex flex-wrap gap-2">
        {on3DTour && (
          <a href={on3DTour} target="_blank" className="px-3 py-2 bg-blue-600 text-white rounded">
            3D тур 360
          </a>
        )}
        <button className="px-3 py-2 bg-gray-200 rounded">Выбрать условия по ипотеке</button>
        <button className="px-3 py-2 bg-red-500 text-white rounded">Забронировано</button>
      </div>
    </div>
  );
};
