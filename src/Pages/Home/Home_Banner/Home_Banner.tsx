import { MdSlowMotionVideo } from "react-icons/md";
import CommonButton from "../../../components/Common_button";
import CommonText from "../../../components/CommonText";
import { Link } from "react-router-dom";

import Hero_Cards from "../../../components/Hero_Cards";




export default function Home_Banner() {
  return (
    <section>
      <div>
        <CommonText
          text="Breath Natureal "
          className="text-[115px] font-semibold primary-text-color"
        ></CommonText>

        <CommonText
          text="plant is a living organism that makes its own food using sunlight, water, and air.It gives us oxygen, keeps the Earth cool, and provides shelter for many living beings. "
          className="text-[23px]  secondary-text-color w-[57%]"
        ></CommonText>

        <div className="flex gap-10">
          <CommonButton
            text="Explore"
            className="primary-text-color text-[28px] py-3.5 px-14 rounded-md  border-2"
          ></CommonButton>
          <Link to={"/"}>
            <p className="primary-text-color text-[28px] px-8 flex items-center gap-5">
              <MdSlowMotionVideo className="text-[70px]"></MdSlowMotionVideo>{" "}
              Live Demo...
            </p>
          </Link>
        </div>
 
        <Hero_Cards></Hero_Cards>
        
      </div>
    </section>
  );
}
