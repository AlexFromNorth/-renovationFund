import { Flat } from "./types";

export const flatMock: Flat = {
  id: '1',
  title: 'Московские кварталы',
  rooms: 1,
  area: 39.4,
  building: '1 корп. /  № 31  / 8 этаж',
  floor: '8 этаж',
  address: 'ВАО, Измайлово, 3-я Прядильная ул., влд. 4',
  metro: [{ name: 'Измайловская', foot: '11 мин.' , car: '15 мин.' }],
  features: ['без аукциона', 'с отделкой'],
  totalPrice: 13896619,
  m2Price: 352706,
  discount: 8.46,
  mortgage: ["Стандартная", "семейная"],
  status: "Забронировано",
  bookingUntil: "до 15.02.2026",
  article: "212926",
  images: [
    { id: 1, src: '/pages/flatInfo_plans.png', locked: true, title: "Планировка" },
    { id: 2, src: '/pages/flatInfo_layewr.jpg', title: "Этаж" },
    { id: 3, src: '/pages/flatInfo_view.jpg', title: "Вид из окна" },
  ],
};
