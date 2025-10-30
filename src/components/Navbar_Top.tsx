import { NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { TbMenuDeep } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../redux/store";
import SearchButton from "./SearchButton";
import { FaHome, FaShopify, FaSignInAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

export default function Navbar_Top() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ Clerk hook for login modal
  const { openSignIn } = useClerk();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/shops?search=${encodeURIComponent(searchTerm)}`);
      setSearchModalOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex justify-center items-center gap-1">
            <img
              className="w-[35px]"
              src="https://img.icons8.com/?size=100&id=18047&format=png&color=000000"
              alt=""
            />
            <p className="md:text-2xl text-xl font-black text-[#FFFFFF]">
              Planto.
            </p>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-14 text-white text-xl">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/shops"><li>Shops</li></NavLink>
            <NavLink to="/"><li>More</li></NavLink>
            <NavLink to="/"><li>Contact</li></NavLink>
          </ul>
        </div>

        <div className="navbar-end relative">
          <div className="flex items-center lg:gap-8 gap-5 md:text-2xl text-xl primary-text-color">
            
            {/* 🔍 Search Icon */}
            <div
              className="cursor-pointer"
              onClick={() => setSearchModalOpen(true)}
            >
              <IoIosSearch />
            </div>

            {/* 🛍️ Cart Icon (শুধু লগইন থাকলে দেখা যাবে) */}
            <SignedIn>
              <NavLink to="cart" className="relative lg:mr-4">
                <SlHandbag className="text-2xl" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {totalCount}
                  </span>
                )}
              </NavLink>
            </SignedIn>

            {/* 👤 প্রোফাইল / লগইন */}
            <SignedIn>
              <div className="dropdown dropdown-end">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            {/* 🚀 লগইন না থাকলে Clerk popup modal খুলবে */}
            <SignedOut>
              <button
                onClick={() => openSignIn()}
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <MdOutlineAccountCircle className="text-3xl" />
              </button>
            </SignedOut>

            {/* 📱 Mobile Menu */}
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            >
              <TbMenuDeep />
            </div>
          </div>
        </div>
      </div>

      {/* 🔍 Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={() => setSearchModalOpen(false)}
          ></div>
          <div className="relative flex justify-center items-center h-full">
            <div
              className="bg-green-800/50 backdrop-blur-md p-6 rounded-xl md:w-11/12 w-[80%] max-w-md relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute md:top-2 right-3 text-white text-xl font-bold"
                onClick={() => setSearchModalOpen(false)}
              >
                ×
              </button>
              <h2 className="text-white md:text-base text-[14px] md:mb-4 mb-2">
                Search Products
              </h2>
              <input
                type="text"
                required
                className="w-full md:p-2 p-1 rounded-md text-white placeholder-white outline-none placeholder:text-xs text-xs md:text-base"
                placeholder="Type product name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <SearchButton onClick={handleSearch} />
            </div>
          </div>
        </div>
      )}

      {/* 📋 Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div
            className={`relative bg-gradient-to-b from-green-900/90 to-green-900/90 w-64 p-6 h-full z-50 transform transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } shadow-xl`}
          >
            <button
              className="absolute top-3 right-3 text-white text-2xl font-bold"
              onClick={() => setSidebarOpen(false)}
            >
              ×
            </button>
            <h2 className="text-white md:text-2xl text-xl font-bold mb-6 border-b border-white/20 pb-2">
              Menu
            </h2>
            <ul className="flex flex-col gap-4 mt-4 text-white text-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/50 ${
                    isActive ? "bg-yellow-400 text-black font-semibold" : ""
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <FaHome /> Home
              </NavLink>
              <NavLink
                to="/shops"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/50 ${
                    isActive ? "bg-yellow-400 text-black font-semibold" : ""
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <FaShopify /> Shops
              </NavLink>

              {/* 🔐 লগইন মেনু (শুধু লগআউট অবস্থায়) */}
              <SignedOut>
                <button
                  onClick={() => {
                    openSignIn();
                    setSidebarOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/50 w-full text-left"
                >
                  <FaSignInAlt /> Login
                </button>
              </SignedOut>

              <NavLink
                to="/contact"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/50"
                onClick={() => setSidebarOpen(false)}
              >
                <FaEnvelope /> Contact
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
