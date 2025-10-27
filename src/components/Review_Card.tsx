import React from "react";
import profile from '../assets/profile.png'
import { FaStar } from "react-icons/fa";
const ReviewCard: React.FC = () => {
  return (
    <div className="relative w-[250px] h-[150px] p-3">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/10 border border-white/20 shadow-lg rounded-3xl"></div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={profile} alt="" />
          <div>
            <p className="text-xs">alena Patel</p>
            <p className="flex gap-1 text-[10px] text-orange-300">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs mt-2 secondary-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
