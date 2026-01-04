import { FlatBannersProps } from "@/entities/flat-banners";

export const flatBannersMock: FlatBannersProps = {
  topBanners: [
    {
      title: 'Двор',
      text: `детские площадки: 1
спортивные площадки: 1
площадки для отдыха: 1
двор без машин
озеленение
камеры видеонаблюдения
освещение`,
      video: '/img/yard.mp4',
      image: '/img/buy_page/t1.webp',
    },
    {
      title: 'Безбарьерная среда',
      image: '/img/buy_page/bottom3.webp',
    },
    {
      title: 'Колясочная',
      text: 'Удобства для каждого',
      image: '/img/buy_page/t2_v2.jpg',
    },
  ],
  wideBanner: {
    title: 'Коммерческие помещения',
    text: `Коммерческие помещения в «Московских кварталах» — это возможность открыть свой бизнес в
развитых жилых районах Москвы. Водоснабжение, отопление, система вентиляции уже готовы к подключению.`,
    image: '/img/buy_page/bottom4.webp',
  },
};
