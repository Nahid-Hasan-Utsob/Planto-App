import React from "react";
import type { Review } from "../hooks/types";
import profile from '../assets/profile.png';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ReviewCardProps {
  review: Review;
  productTitle?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  if (!review) return null; // safety check

  // Star rendering function
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="relative w-[400px] h-[300px] m-3 rounded-3xl shadow-lg overflow-hidden">
      {/* SVG Glass Background */}
      <svg
        viewBox="0 0 450 300"
        className="absolute inset-0 w-full h-full"
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
            <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0.05)" }} />
          </linearGradient>

          <filter id="glassBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feFlood floodColor="rgba(0,0,0,0.15)" floodOpacity="1" result="flood" />
            <feComposite in="flood" in2="offsetblur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M50 0 C 150 20, 300 20, 400 0 
             L400 0 A50 50 0 0 1 450 50 
             V250 A50 50 0 0 1 400 300 
             H50 A50 50 0 0 1 0 250 
             V50 A50 50 0 0 1 50 0 Z"
          fill="url(#glassGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          filter="url(#glassBlur)"
        />
      </svg>

      {/* Content Centered */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 space-y-4">
        <div className="flex gap-4 items-center">
          <img className="w-18 h-18 shadow-2xl rounded-full overflow-hidden" src={profile} alt="" />
          <div>
            <p className="text-xl font-semibold">{review.reviewerName}</p>
            <div className="flex gap-1 mt-1">{renderStars(review.rating)}</div>
          </div>
        </div>

        <p className="text-base mt-2 px-2 h-24">{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
