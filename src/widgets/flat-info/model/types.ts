// widgets/flat-card/types.ts
export interface FlatInfoProps {
  id: string;
  title: string;
  rooms: number;
  area: number; // м²
  building: string;
  floor: string;
  address: string;
  metro: { name: string; time: string }[];
  features: string[];
  mortgage: string;
  purchaseCondition: string;
  bookingDeadline: string;
  article: string;
  totalPrice: number;
  m2Price: number;
  discount?: number; // % скидка
  images: { id: number; src: string; alt?: string; locked?: boolean }[];
  on3DTour?: string;
}
