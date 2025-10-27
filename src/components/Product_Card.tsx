import React from "react";
import product from "../assets/product.png";

const Product_Card: React.FC = () => {
  return (
    <div className="relative w-[300px] bg-transparent rounded-3xl  shadow-lg">
      {/* Glass Background SVG */}
      <svg
        viewBox="0 0 450 700"
        className="w-full  absolute inset-0"
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
          d="M50 0 C 150 20, 300 20, 400 0 L400 0 A50 50 0 0 1 450 50 V450 A50 50 0 0 1 400 500 H50 A50 50 0 0 1 0 450 V50 A50 50 0 0 1 50 0 Z"
          fill="url(#glassGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          filter="url(#glassBlur)"
        />
      </svg>

      {/* Content */}
      <div className="relative flex flex-col  items-center justify-start text-center text-white p-6 space-y-4 ">
        <img
          src={product}
          alt="Product"
          className=" object-contain drop-shadow-lg -mt-[120px]"
        />
        <h2 className="text-2xl font-semibold -mt-[50px]">Modern Headphone</h2>
        <p className="text-gray-200 text-sm">
          High-quality wireless headphone with noise cancellation.
        </p>
        <div className="flex justify-center space-x-1">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl opacity-50">★</span>
        </div>
      </div>
    </div>
  );
};

export default Product_Card;
