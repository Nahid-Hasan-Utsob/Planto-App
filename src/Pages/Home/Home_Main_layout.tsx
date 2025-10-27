import type React from "react";
import Navbar_Top from "../../components/Navbar_Top";
import Home_Banner from "./Home_Banner/Home_Banner";
import Style_Common_Text from "../../components/Style_Common_Text";

const Home_Main_Layout: React.FC = () => {
  return (
    <div className="max-w-[1500px] mx-auto"> 
      <Navbar_Top></Navbar_Top>
      <Home_Banner></Home_Banner>
      <Style_Common_Text className="text-[50px]" text="Our Trendy plants"></Style_Common_Text>
    </div>
  );
};

export default Home_Main_Layout;
