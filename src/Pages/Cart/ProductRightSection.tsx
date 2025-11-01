// src/components/ProductRightSection.tsx

import type { Product } from "../../hooks/types";
import AddToCartButton from "./AddToCartButton";
import { GiShoppingCart } from "react-icons/gi";

interface Props {
  product: Product;
}

export default function ProductRightSection({ product }: Props) {
  return (
    <div className="grid  gap-6">
      {/* Right Info */}

      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>

        <div className="w-[90%]">
          <p
            className="lg:text-base text-gray-200
        "
          >
            {product.description}
          </p>
        </div>

        <p className="text-2xl font-bold  my-3 flex gap-2">
          <span className="text-red-400"> Tk.</span> {product.price}/-
       <p className="text-base text-red-400 flex gap-1 items-end">   {product.discountPercentage}% <span className="text-xs text-white"> Discount</span></p>
        </p>

        <div>
          <p className="text-xs underline underline-offset-5">Additional Details</p>

          <div className="flex my-4 gap-10">
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <p className="text-gray-300">Rating:</p>
                  <p className="text-yellow-400">{product.rating}</p>
                </div>
                <p className="text-xs text-yellow-400 font-bold">
                  ( {product.reviews?.length} reviews )
                </p>
              </div>
              <div className="flex items-center gap-2 font-bold text-xs">
                <p className="text-gray-300">Category:</p>
                <p className="text-yellow-400">{product.category}</p>
              </div>

              <div className="flex items-center gap-2 font-bold text-xs">
                <p className="text-gray-300">Stock:</p>
                <p className="text-yellow-400">{product.stock} items</p>
              </div>

              <div className="flex items-center gap-2 font-bold text-xs">
                <p className="text-gray-300">Brand:</p>
                <p className="text-yellow-400">{product.brand}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold text-xs">
                <p className="text-gray-300">Delivery:</p>
                <p className="text-yellow-400">{product.shippingInformation}</p>
              </div>
              <div className="flex items-center gap-2 font-bold text-xs">
                <p className="text-gray-300">Status:</p>
                <p className="text-yellow-400">{product.availabilityStatus}</p>
              </div>
              <div className="flex items-center gap-2 font-bold text-xs">
                <p className="text-gray-300">Weight:</p>
                <p className="text-yellow-400">{product.weight} KG</p>
              </div>
              <div className="flex items-center gap-2 font-bold text-xs">
                <p className="text-gray-300">Return:</p>
                <p className="text-yellow-400">{product.returnPolicy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* AddToCartButton */}
        <div className="flex items-center gap-4 mt-6 h-[70px]" >
          <div className="w-[200px]">
            <AddToCartButton product={product} />
          </div>

          {/* Buy Now Button */}
          <button className="px-4 py-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition flex items-center justify-center text-xs gap-1 w-[200px]">
            <p className="flex gap-2 items-center ">
              <GiShoppingCart className="text-xl font-bold"></GiShoppingCart>
              Buy Now
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
