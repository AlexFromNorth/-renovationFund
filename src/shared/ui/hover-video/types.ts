export interface Banner {
  title: string;
  text?: string;
  image?: string;
  video: string;
}

export interface HoverVideoProps {
  banner: Banner;
}