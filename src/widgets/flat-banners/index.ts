import { FlatBannersProps } from "@/entities/flat-banners";

export const flatBannersMock: FlatBannersProps = {
  topBanners: [
    {
      title: "Двор",
      text: `детские площадки: 1
спортивные площадки: 1
площадки для отдыха: 1
двор без машин
озеленение
камеры видеонаблюдения
освещение`,
      video: "/pages/flatBanners_yard.mp4",
    },
    {
      title: "Безбарьерная среда",
      image: "/pages/flatBanners_environ.webp",
    },
    {
      title: "Колясочная",
      text: "Удобства для каждого",
      image: "/pages/flatBanners_stroller.jpg",
    },
  ],
  wideBanner: {
    title: "Коммерческие помещения",
    text: `Коммерческие помещения в «Московских кварталах» — это возможность открыть свой бизнес в
развитых жилых районах Москвы. Водоснабжение, отопление, система вентиляции уже готовы к подключению.`,
    image: "/pages/flatBanners_commers.webp",
  },
};
