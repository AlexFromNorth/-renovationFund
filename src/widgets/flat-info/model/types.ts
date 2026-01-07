export interface FlatImage {
  id: number;
  src: string;
  alt?: string;
  label?: string;
}

export interface MetroInfo {
  name: string;
  foot: string;
  car: string;
}

export interface Flat {
  id: string;
  title: string;
  rooms: number;
  area: number;
  building: string;
  floor: string;
  address: string;
  metro: MetroInfo[];
  features: string[];
  totalPrice: number;
  m2Price: number;
  discount?: number;
  mortgage?: string[];
  status?: string;
  bookingUntil?: string;
  article?: string;
  images: FlatImage[];
}
