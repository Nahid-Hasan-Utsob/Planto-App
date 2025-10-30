import { NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { TbMenuDeep } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../redux/store";
import SearchButton from "./SearchButton";

export default function Navbar_Top() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false); // <-- sidebar state

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
          <div className="flex items-center lg:gap-14 gap-8 md:text-2xl text-xl primary-text-color">
            <div className="cursor-pointer" onClick={() => setSearchModalOpen(true)}>
              <IoIosSearch />
            </div>

            <NavLink to="cart" className="relative">
              <SlHandbag className="text-2xl" />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {totalCount}
                </span>
              )}
            </NavLink>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden cursor-pointer" onClick={() => setSidebarOpen(true)}>
              <TbMenuDeep />
            </div>
          </div>
        </div>
      </div>

      {/* 🔍 Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={() => setSearchModalOpen(false)}></div>
          <div className="relative flex justify-center items-center h-full">
            <div
              className="bg-green-800/50 backdrop-blur-md p-6 rounded-xl w-11/12 max-w-md relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-white text-xl font-bold"
                onClick={() => setSearchModalOpen(false)}
              >
                &times;
              </button>
              <h2 className="text-white text-xl mb-4">Search Products</h2>
              <input
                type="text"
                className="w-full p-2 rounded-md text-white placeholder-white outline-none"
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

      {/* 🔹 Sidebar for Mobile Menu */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative bg-green-900 w-64 p-6 h-full z-50">
            <button
              className="absolute top-3 right-3 text-white text-xl font-bold"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            <ul className="flex flex-col gap-4 mt-10 text-white text-lg">
              <NavLink to="/" onClick={() => setSidebarOpen(false)}><li>Home</li></NavLink>
              <NavLink to="/shops" onClick={() => setSidebarOpen(false)}><li>Shops</li></NavLink>
              <NavLink to="/login" onClick={() => setSidebarOpen(false)}><li>Login</li></NavLink>
              <NavLink to="/contact" onClick={() => setSidebarOpen(false)}><li>Contact</li></NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
