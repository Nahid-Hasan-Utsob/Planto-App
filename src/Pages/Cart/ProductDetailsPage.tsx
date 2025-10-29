import { useLocation } from "react-router-dom";
import type { Product } from "../../hooks/types";

export default function ProductDetailsPage() {
  const { state } = useLocation();
  const product = state as Product;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
