import type React from "react";
import Navbar_Top from "../../components/Navbar_Top";
import Home_Banner from "./Home_Banner/Home_Banner";
import Style_Common_Text from "../../components/Style_Common_Text";
import Hero_Cards from "../../components/Hero_Cards";
import Top_selling from "./Home_Banner/Top_selling";
import Customer_Review from "./Customer_Review/Customer_Review";
import Best_Cards from "../../components/Best_Section/Best_Cards";


const Home_Main_Layout: React.FC = () => {
  return (
<section className="">
      <div className="max-w-[1500px] mx-auto"> 
  <div className=" "
>
        <Navbar_Top></Navbar_Top>
      <Home_Banner></Home_Banner>
      <Style_Common_Text className="md:text-[40px] text-[24px] md:my-21 py-10 text-white" text="Our Trendy plants"></Style_Common_Text>
      <Hero_Cards></Hero_Cards>
  </div>
        <Style_Common_Text className="md:text-[40px] mt-10 lg:mt-0 text-[24px] md:my-21 py-10 text-white " text="Our Top Selling"></Style_Common_Text>
        <Top_selling></Top_selling>
        <Style_Common_Text className="md:text-[40px] text-[24px]  text-white" text="Customer Review"></Style_Common_Text>

       <Customer_Review></Customer_Review>
    <div className="hidden lg:block">
         <Style_Common_Text className="text-[40px] my-21 text-white" text="Our Best"></Style_Common_Text>

    <Best_Cards></Best_Cards>
    </div>
    </div>
</section>
  );
};

export default Home_Main_Layout;
