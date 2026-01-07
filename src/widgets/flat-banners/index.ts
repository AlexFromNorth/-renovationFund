import { FlatBannersProps } from "@/entities/flat-banners";

export const flatBannersMock: FlatBannersProps = {
  topBanners: [
    {
      title: "Двор",
      text: `детские площадки: 1<br />
спортивные площадки: 1<br />
площадки для отдыха: 1<br />
двор без машин<br />
озеленение<br />
камеры видеонаблюдения<br />
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
