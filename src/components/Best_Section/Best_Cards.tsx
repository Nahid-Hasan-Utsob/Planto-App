import React from 'react';
import CommonButton from "../../components/Common_button";

import products from '../../assets/product.png';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BestCardsPage: React.FC = () => {
  // 🔹 Same page এ dynamic objects
  const cardsData = [
    {
      id: 1,
      title: "We Have Small And Best O2 Plants Collection",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: products
    },
    {
      id: 2,
      title: "Indoor Plants For Healthy Air",
      description: "Decorate your home with indoor plants that purify air and add natural beauty. Perfect for every room.",
      image: products
    },
    {
      id: 3,
      title: "Compact Plants Collection",
      description: "Small, adorable, and easy-to-care plants for your desk or living room.",
      image: products
    }
  ];

  return (
    <div className="  flex flex-col items-center gap-10">



      <div className="w-full  h-[450px]">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          className="h-full"
        >
          {cardsData.map((card) => (
            <SwiperSlide key={card.id} className=''>
              <section className="relative w-full h-[400px] flex items-center justify-center m-11 mx-auto pt-5">
                <div className="relative w-11/12 h-full bg-white/5 border border-white/20 rounded-[50px] flex  ">

                  {/* Image Section */}
                  <div className="w-1/2 flex items-center justify-center p-15 -mt-[30px] h-full">
                    <img
                      className="object-contain w-full  transition-all duration-300 mr-[200px]"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-1/2 flex flex-col justify-center p-10 gap-5 text-white">
                    <p className="font-semibold text-4xl">
                      {card.title}
                    </p>
                    <p className="text-base text-white/80 whitespace-pre-line">
                      {card.description}
                    </p>

                    <div className="flex items-center mt-3">
                      <CommonButton
                        text="Explore"
                        className="primary-text-color text-xl py-2 px-10 rounded-md border-2"
                      />
                   
                    </div>
                  </div>

                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </div>
  );
};

export default BestCardsPage;
