import React from "react";
import CommonButton from "./Common_button";
import { SlHandbag } from "react-icons/sl";

type HeroCardProps = {
  data: {
    title?: string;
    description?: string;
    image?: string;
    price?:number
  };
  reverse?: boolean;
};

const Hero_Card: React.FC<HeroCardProps> = ({ data, reverse = false }) => {
  const { title, description, image,price } = data;

  return (
    <section className="relative w-full h-[400px]">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/5 border border-white/20 shadow-lg rounded-[100px] ">
        <div
          className={`flex items-center justify-between -mt-[180px] px-10 ${
            reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Image Section */}
          <div
            className={`w-1/2 flex ${
              reverse ? "justify-end" : "justify-start"
            }`}
          >
            <img
              className={`w-[75%] ${
                reverse ? "mr-[-40px]" : "ml-0"
              } object-contain transition-all duration-300`}
              src={image}
              alt={title}
            />
          </div>

          {/* Text Section */}
          <div
            className={`w-1/2 pt-24 ${
              reverse ? "text-right pr-6" : "text-left pl-6"
            }`}
          >
            <p className="font-semibold text-white text-[35px] ">{title}</p>
            <p className="text-sm mt-2 text-white text-[18px]">{description}</p>
            <p className="mt-2 font-semibold text-white text-[35px]">Rs. {price}/-</p>
            <div className={`flex items-center mt-3 gap-5 ${reverse ? 'justify-end' : ''}`} >
             <CommonButton
            text="Explore"
            className="primary-text-color text-xl py-2 px-10 rounded-md  border-2"
          ></CommonButton>
         <div>
           <p className="primary-text-color text-3xl py-[7px] px-5 rounded-md  border-2 w-fit">
                  <SlHandbag></SlHandbag>
          </p>
         </div>
       
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Card;
