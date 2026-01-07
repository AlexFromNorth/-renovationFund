export interface Metro {
  name: string;
  time: string;
}

export interface FlatImage {
  id: number;
  src: string;
  alt?: string;
  locked?: boolean;
  title?: string;
}

export interface Flat {
  id: string;
  title: string;
  rooms: number;
  area: number;
  building: string;
  floor: string;
  address: string;
  metro: Metro[];
  features: string[];
  mortgage?: string;
  purchaseCondition?: string;
  bookingDeadline?: string;
  article?: string;
  totalPrice: number;
  m2Price: number;
  discount?: number;
  images: FlatImage[];
}
