// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import type { Product } from "./types";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/public/productData.json"); // public folder path
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      return data.products;
    },
  });
};
