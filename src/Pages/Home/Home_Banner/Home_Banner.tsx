import { MdSlowMotionVideo } from "react-icons/md";
import CommonButton from "../../../components/Common_button";
import CommonText from "../../../components/CommonText";
import { Link } from "react-router-dom";

import Product_Card from "../../../components/Product_Card";

export default function Home_Banner() {
  return (
    <section className="flex lg:flex-row flex-col  items-center  justify-between lg:mt-36 mt-15">
      <section>
        <div className="flex flex-col gap-6 mt-10 text-center lg:text-start">
          <CommonText
            text="Breath Natureal "
            className="lg:text-7xl md:text-5xl text-4xl  font-semibold primary-text-color"
          ></CommonText>

          <CommonText
            text="plant is a living organism that makes its own food using sunlight, water, and air.It gives us oxygen"
            className="lg:text-xl md:text-base text-xs  secondary-text-color lg:w-3/8 w-[90%]"
          ></CommonText>

          <div className="flex md:flex-row flex-col md:gap-10 items-center md:justify-center">
            <CommonButton
              text="Explore"
              className="md:primary-text-color font-bold lg:text-xl  md:px-10 text-[14px] w-full md:w-fit py-2 rounded-md  lg:border-2 bg-yellow-500 md:bg-none text-black "
            ></CommonButton>
            <Link to={"/"} className="hidden md:block">
              <p className="primary-text-color text-xl flex items-center gap-5">
                <MdSlowMotionVideo className="text-5xl"></MdSlowMotionVideo>
                Live Demo...
              </p>
            </Link>
          </div>
        </div>
        <div className="md:mt-[150px] mt-10"></div>
      </section>
      <section>
        <Product_Card></Product_Card>
      </section>
    </section>
  );
}
