import React from "react";
import { SlHandbag } from "react-icons/sl";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AddToCartButton from "../Pages/Cart/AddToCartButton";

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
    <div className="lg:flex text-yellow-400 lg:gap-[3px] gap-0.5 text-xs lg:text-base hidden">
      {stars}
    </div>
  );
};

interface ProductType {
  id: number;
  title: string;
  rating: number;
  price: number;
  description: string;
  thumbnail: string;
}

interface MainProductCardProps {
  products: ProductType;
}

const Main_Product_Card: React.FC<MainProductCardProps> = ({ products }) => {
  const { rating, title, price, description, thumbnail } = products;

  return (
    <div className="relative w-[170px] h-auto min-h-[280px] md:w-[240px] md:h-auto md:min-h-[350px] lg:w-[400px] lg:h-auto lg:min-h-[550px] mx-auto lg:m-3 lg:p-1">
      {/* Responsive SVG Container - Auto Height */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          viewBox="0 0 450 550"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="glassGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
            <filter id="glassBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feFlood
                floodColor="rgba(0,0,0,0.15)"
                floodOpacity="1"
                result="flood"
              />
              <feComposite
                in="flood"
                in2="offsetblur"
                operator="in"
                result="shadow"
              />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Same Curve Path */}
          <path
            d="M50 0 
               C 150 20, 300 20, 400 0 
               L400 0 
               A50 50 0 0 1 450 50 
               V500 
               A50 50 0 0 1 400 550 
               H50 
               A50 50 0 0 1 0 500 
               V50 
               A50 50 0 0 1 50 0 Z"
            fill="url(#glassGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            filter="url(#glassBlur)"
          />
        </svg>
      </div>

      {/* Content - Auto Height */}
      <div className="relative flex flex-col justify-start text-white p-3 md:p-4 lg:p-6 h-full min-h-[300px] md:min-h-[340px] lg:min-h-[550px]">
        {/* Image - Responsive */}
        <div className="flex justify-center lg:justify-start mb-2">
          <img
            src={thumbnail}
            alt={title}
            className="object-contain drop-shadow-lg  h-auto lg:w-[350px] lg:h-[410px] lg:-mt-[120px] -mt-[40px] md:-mt-[45px]"
          />
        </div>

        {/* Title + Rating */}
        <div className="flex items-center  lg:justify-between justify-center mb-2 md:mb-3 lg:-mt-4 lg:mb-4">
          <p className="text-[18px] md:text-xl lg:text-2xl font-semibold   text-center lg:text-left   flex lg:block items-center justify-center h-[60px] lg:h-auto ">
            {title}
          </p>
          <StarRating rating={rating} />
        </div>

        {/* Description */}
        <p className="text-white text-xs md:text-[16px] lg:mb-3 md:mb-4 line-clamp-3 lg:line-clamp-none text-center lg:text-left md:h-[90px]  h-[80px]">
          {description}
        </p>

        {/* Price + Add to Cart */}
        <div className="lg:flex hidden justify-between items-center mt-auto">
          <p className="text-white text-sm md:text-base lg:text-[35px] font-bold">
            Rs. {price}/-
          </p>
          <div className="primary-text-color lg:flex items-center text-sm md:text-lg lg:text-2xl py-1 px-2 md:py-1.5 md:px-3 lg:py-[5px] lg:px-4 rounded-md border-2 hidden">
            <SlHandbag />
          </div>
        </div>

        <div className="flex items-center justify-between md:h-[47px] mt-1 md:mt-0   lg:hidden">
          <p className="lg:mt-2 font-semibold text-white text-[15px] my-1 lg:text-[35px] md:text-xl" >
            <span className="text-red-500">Rs.</span> {price}/-
          </p>
          {/* Rating Section */}
          <div className="flex mt-1 lg:hidden">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="text-yellow-400 text-xs">
                {i < (rating || 0) ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>
        
                  <div className="w-full lg:hidden h-[30px] mt-1">
                    <AddToCartButton></AddToCartButton>
                  </div>
      </div>
    </div>
  );
};

export default Main_Product_Card;
