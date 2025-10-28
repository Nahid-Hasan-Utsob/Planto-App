import React from "react";
import CommonButton from "./Common_button";
import { SlHandbag } from "react-icons/sl";
import AddToCartButton from "../Pages/Cart/AddToCartButton";


type HeroCardProps = {
  data: {
    title?: string;
    description?: string;
    image?: string;
    price?: number;
  };
  reverse?: boolean;
};

const Hero_Card: React.FC<HeroCardProps> = ({ data, reverse = false }) => {
  const { title, description, image, price } = data;

  return (
    <section className="relative w-full lg:h-[400px] h-[340px]">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/5 border border-white/20 shadow-lg lg:rounded-[100px] rounded-2xl px-2">
        <div
          className={`flex  items-center lg:flex-row flex-col lg:justify-between lg:-mt-[180px] lg:px-10 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row flex-col"
          }`}
        >
          {/* Image Section */}
          <div
            className={`lg:w-1/2 flex ${
              reverse ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <img
              className={`lg:w-[75%] lg:h-full  w-full md:-mt-0.5 -mt-[30px] ${
                reverse ? "lg:mr-[-41px]" : "lg:ml-0"
              } object-cover transition-all duration-300`}
              src={image}
              alt={title}
            />
          </div>

          {/* Text Section */}
          <div
            className={`lg:w-1/2 lg:pt-[200px] mt-4 lg:mt-0 ${
              reverse ? "lg:text-right lg:pr-6" : "lg:text-left lg:pl-6"
            }`}
          >
            <p className="font-semibold text-white text-[18px] text-center  lg:text-[35px] ">{title}</p>
            <p className="text-xs text-center  mt-2 text-white  lg:text-[18px]">{description}</p>
            <p className="lg;mt-2 font-semibold text-white text-[15px] my-1 lg:text-[35px]">
              Rs. {price}/-
            </p>
            <div
              className={`flex items-center lg:mt-3 lg:gap-5 ${
                reverse ? "justify-end" : ""
              }`}
            >
              <CommonButton
                text="Explore"
                className="primary-text-color lg:text-xl text-xs lg:py-2 lg:px-10 px-4 py-1 rounded-md  border-2 hidden"
              ></CommonButton>
              <div className="lg:w-fit w-full">
                <div className="primary-text-color lg:text-3xl lg:py-[7px] px-3 py-1 lg:px-5 rounded-md  lg:border-2 lg:w-fit  flex justify-center ">
                  <SlHandbag className="hidden"></SlHandbag>
                  {/* <div className="flex items-center gap-2 w-full justify-center">
                    <p className="text-xs">Add To Cart</p>
                    <SlHandbag></SlHandbag>
                  </div> */}

                      <AddToCartButton></AddToCartButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Card;
