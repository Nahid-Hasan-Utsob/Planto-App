import type React from "react";
import Navbar_Top from "../../components/Navbar_Top";
import Home_Banner from "./Home_Banner/Home_Banner";
import Style_Common_Text from "../../components/Style_Common_Text";
import Hero_Cards from "../../components/Hero_Cards";
import Top_selling from "./Home_Banner/Top_selling";

const Home_Main_Layout: React.FC = () => {
  return (
<section className="">
      <div className="max-w-[1500px] mx-auto"> 
  <div className=" "
>
        <Navbar_Top></Navbar_Top>
      <Home_Banner></Home_Banner>
      <Style_Common_Text className="text-[40px] my-24" text="Our Trendy plants"></Style_Common_Text>
      <Hero_Cards></Hero_Cards>
  </div>
        <Style_Common_Text className="text-[40px] my-24" text="Our Top Selling"></Style_Common_Text>
        <Top_selling></Top_selling>
        <Style_Common_Text className="text-[40px] my-24" text="Customer Review"></Style_Common_Text>
    </div>
</section>
  );
};

export default Home_Main_Layout;
