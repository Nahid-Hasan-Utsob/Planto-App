import React from "react";
import { SlHandbag } from "react-icons/sl";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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
    <div className="flex text-yellow-400 gap-[3px] text-base">{stars}</div>
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
    <div className="relative w-[400px] h-[550px] bg-transparent rounded-3xl shadow-lg m-3 p-1">
      {/* Glass Background SVG */}
      <svg
        viewBox="0 0 450 550"
        className="w-full h-full absolute inset-0"
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
            <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0.2)" }} />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(255,255,255,0.05)" }}
            />
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

        <path
          d="M50 0 C 150 20, 300 20, 400 0 
             L400 0 A50 50 0 0 1 450 50 
             V500 A50 50 0 0 1 400 550 
             H50 A50 50 0 0 1 0 500 
             V50 A50 50 0 0 1 50 0 Z"
          fill="url(#glassGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          filter="url(#glassBlur)"
        />
      </svg>

      {/* Content */}
      <div className="relative flex flex-col justify-start text-white p-6 space-y-4">
        <img
          src={thumbnail}
          alt="Product"
          className="object-contain drop-shadow-lg -mt-[120px] w-[350px] h-[410px]"
        />
        <div className="flex items-center justify-between  -mt-[38px]">
          <p className="text-2xl font-semibold h-[60px] flex items-center">{title}</p>
          <StarRating rating={rating} />
        </div>

        <p className="text-gray-200 text-sm h-[50px]">{description}</p>

        <div className="flex gap-5 justify-between mt-3">
          <p className="text-[35px] text-white">Rs. {price}/-</p>
          <p className="primary-text-color flex items-center text-2xl py-[5px] px-4 rounded-md border-2 w-fit">
            <SlHandbag />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main_Product_Card;
