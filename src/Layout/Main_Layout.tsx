import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar_Top from "../components/Navbar_Top";

const Main_Layout: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // ⏳ ৩.৫ সেকেন্ডের জন্য লোডার দেখাবে
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // ⚡ Loader screen (Glass effect + small loader)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#031e0add] backdrop-blur-2xl">
        <HashLoader color="#ffff00" size={35} />
      </div>
    );
  }

  // ✅ মূল layout
  return (
    <section className="inter bg-[#031e0add] px-2">
      <Navbar_Top />
      <Outlet />
      <div className="mt-20">
        <Footer />
      </div>
    </section>
  );
};

export default Main_Layout;
