import type React from "react";
import Navbar_Top from "../../components/Navbar_Top";
import Home_Banner from "./Home_Banner/Home_Banner";
import Style_Common_Text from "../../components/Style_Common_Text";
import Hero_Cards from "../../components/Hero_Cards";
import Top_selling from "./Home_Banner/Top_selling";

const Home_Main_Layout: React.FC = () => {
  return (
    <div className="max-w-[1500px] mx-auto"> 
      <Navbar_Top></Navbar_Top>
      <Home_Banner></Home_Banner>
      <Style_Common_Text className="text-[40px] my-24" text="Our Trendy plants"></Style_Common_Text>
      <Hero_Cards></Hero_Cards>
        <Style_Common_Text className="text-[40px] my-24" text="Our Top Selling"></Style_Common_Text>
        <Top_selling></Top_selling>
    </div>
  );
};

export default Home_Main_Layout;
