import type React from "react";
import Navbar_Top from "../../components/Navbar_Top";
import Home_Banner from "./Home_Banner/Home_Banner";

import GlassCard from "../../components/Review_Card";

const Home_Main_Layout:React.FC = () =>{
      return(
            <div>
                 <Navbar_Top></Navbar_Top>
                 <Home_Banner></Home_Banner>
            <GlassCard />
            </div>
      )
}

export default Home_Main_Layout;