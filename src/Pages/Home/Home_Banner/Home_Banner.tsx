import { MdSlowMotionVideo } from "react-icons/md";
import CommonButton from "../../../components/Common_button";
import CommonText from "../../../components/CommonText";
import { Link } from "react-router-dom";

import Product_Card from "../../../components/Product_Card";

export default function Home_Banner() {
  return (
    <section className="flex item-start  justify-around mt-[60px]">
      <section>
        <div className="flex flex-col gap-5 mt-10">
          <CommonText
            text="Breath Natureal "
            className="text-7xl font-semibold primary-text-color"
          ></CommonText>

          <CommonText
            text="plant is a living organism that makes its own food using sunlight, water, and air.It gives us oxygen"
            className="text-xl  secondary-text-color w-3/8"
          ></CommonText>

          <div className="flex gap-10 items-center">
            <CommonButton
              text="Explore"
              className="primary-text-color text-xl py-2 px-10 rounded-md  border-2"
            ></CommonButton>
            <Link to={"/"}>
              <p className="primary-text-color text-xl flex items-center gap-5">
                <MdSlowMotionVideo className="text-5xl"></MdSlowMotionVideo>{" "}
                Live Demo...
              </p>
            </Link>
          </div>
        </div>
        <div className="mt-[150px]"></div>
      </section>
      <section>
        <Product_Card></Product_Card>
      </section>
    </section>
  );
}
