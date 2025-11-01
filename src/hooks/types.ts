// src/hooks/types.ts
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews?: Review[];
  images: string[];
  thumbnail: string;
    category?: string;
    stock?:number;
    tags?:string;
    brand?: string;
    sku?:string;
    weight?:number;
    shippingInformation?:string;
    availabilityStatus?:string;
    returnPolicy?:string;
    discountPercentage?:number;

}
