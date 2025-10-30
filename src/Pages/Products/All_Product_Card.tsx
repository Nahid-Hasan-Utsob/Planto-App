import React from "react";


import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AddToCartButton from "../../Pages/Cart/AddToCartButton";

import type { Product } from "../../hooks/types";

import { Link } from "react-router-dom";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];
  for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} />);
  if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" />);
  for (let i = 0; i < emptyStars; i++)
    stars.push(<FaRegStar key={`empty-${i}`} />);

  return (
    <div className="flex text-yellow-400 gap-1 text-sm lg:text-base">
      {stars}
    </div>
  );
};

interface ProductCardProps {
  products: Product;
}

const All_Product_Card: React.FC<ProductCardProps> = ({ products }) => {
  const { rating, title, price, description, thumbnail, id } = products;



  return (
    <div className="relative w-full max-w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[30px] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]  text-white flex flex-col justify-between p-4 my-10">
      {/* 🖼️ Image */}
      <Link to={`/product/${id}`} state={products} className="block">
        <div className="flex justify-center mb-4">
          <img
            src={thumbnail}
            alt={title}
            className="object-contain w-full max-h-[300px] drop-shadow-lg -mt-[60px]"
          />
        </div>

        {/* Title + Rating */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left h-[60px]">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
            {title}
          </p>
       
        </div>
          <div className="hidden lg:block my-2" >
             <StarRating rating={rating} />
         </div>

        {/* Description */}
        <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-3 h-20 md:h-[90px] lg:h-[100px]">
          {description}
        </p>
      </Link>

      {/* 🛒 Add to Cart + Price */}
      <div className="flex justify-between items-center mt-auto">
        <p className="font-bold text-lg md:text-xl lg:text-2xl">
          <span className="text-red-400">Rs.</span> {price}/-
        </p>
      
          <div className="lg:hidden">
             <StarRating rating={rating} />
         </div>
      </div>

      {/* 📱 Mobile Add Button */}
      <div className="w-full mt-3 ">
        <AddToCartButton product={products} />
      </div>
    </div>
  );
};

export default All_Product_Card;
