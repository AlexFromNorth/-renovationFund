export interface BannerItem {
  title: string;
  text?: string;
  image?: string;
  video?: string;
}

export interface FlatBannersProps {
  topBanners: BannerItem[];
  wideBanner?: BannerItem;
}
