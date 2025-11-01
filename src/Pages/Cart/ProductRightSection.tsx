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
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold md:mb-2 mb-1">{product.title}</h1>

        <div className="md:w-[90%]">
          <p
            className="lg:text-base md:text-sm text-xs text-white/80
        "
          >
            {product.description}
          </p>
        </div>

        <div className="text-2xl font-bold  lg:my-3 my-2 flex justify-between gap-2">
     <div className="flex lg:flex-none justify-between px-2 md:px-0 md:justify-start w-full">
          <div>
             <span className="text-red-400"> Tk.</span> {product.price}/-
          </div>
  
         <div className="items-end md:flex md:ml-3">
           <p className="text-base text-red-400 flex lg:flex-row flex-col lg:gap-1 items-end">
            {" "}
            {product.discountPercentage}%{" "}
            <span className="text-xs text-white"> Discount</span>
          </p>
         </div>
            </div>
        </div>

        <div>
          <p className="text-xs underline underline-offset-5">
            Additional Details
          </p>

          <div className="flex my-3 md:my-4 md:gap-10 gap-2">
            <div className="w-1/2 flex flex-col gap-1 ">
              <div className="flex gap-1">
                <div className="flex items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                  <p className="text-gray-300">Rating:</p>
                  <p className="text-yellow-400">{product.rating}</p>
                </div>
                <p className="md:text-xs text-[10px] text-yellow-400 font-bold">
                  ( {product.reviews?.length} reviews )
                </p>
              </div>
              <div className="flex items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                <p className="text-gray-300">Category:</p>
                <p className="text-yellow-400">{product.category}</p>
              </div>

              <div className="flex items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                <p className="text-gray-300">Stock:</p>
                <p className="text-yellow-400">{product.stock} items</p>
              </div>

              <div className="flex items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                <p className="text-gray-300">Brand:</p>
                <p className="text-yellow-400">{product.brand}</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <div className="flex md:items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                <p className="text-gray-300">Delivery:</p>
                <p className="text-yellow-400 ">{product.shippingInformation}</p>
              </div>
              <div className="flex items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                <p className="text-gray-300">Status:</p>
                <p className="text-yellow-400">{product.availabilityStatus}</p>
              </div>
              <div className="flex items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                <p className="text-gray-300">Weight:</p>
                <p className="text-yellow-400">{product.weight} KG</p>
              </div>
              <div className="flex items-center md:gap-2 gap-1 font-bold md:text-xs text-[10px]">
                <p className="text-gray-300">Return:</p>
                <p className="text-yellow-400">{product.returnPolicy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* AddToCartButton */}
        <div className="flex items-center md:gap-4 gap-3 md:mt-6 h-[70px] justify-center lg:justify-start">
          <div className="md:w-[200px] w-[150px]">
            <AddToCartButton product={product} />
          </div>

          {/* Buy Now Button */}
          <button className="px-4 py-1.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition flex items-center justify-center text-xs gap-1 md:w-[200px] w-[150px]">
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
