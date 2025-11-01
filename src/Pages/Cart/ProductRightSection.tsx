// src/components/ProductRightSection.tsx

import type { Product } from "../../hooks/types";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: Product;
}

export default function ProductRightSection({ product }: Props) {


  return (
    <div className="grid md:grid-cols-2 gap-6">
 
      {/* Right Info */}
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl font-bold text-red-400 mb-3">Rs. {product.price}/-</p>

        {/* AddToCartButton */}
        <div className="w-[200px]">
          <AddToCartButton product={product} />
        </div>

        {/* Buy Now Button */}
        <button className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-1 w-[200px]">
          Buy Now
        </button>
      </div>
    </div>
  );
}
