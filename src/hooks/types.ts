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
  reviews?: Review[]; // optional, safety জন্য ?
  images: string[];
  thumbnail: string;
}
