export interface IProduct {
  name: string;
  price: number;
  stars: number;
  sales: number;
  stock: number;
  details?: object;
  coupons?: { name: string; discount: number }[];
  imageURL: string;
  limited_time_deal?: { active: true; discount: number };
}