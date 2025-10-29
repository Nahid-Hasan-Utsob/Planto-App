import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { TbMenuDeep } from "react-icons/tb";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Navbar_Top() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navlink = (
    <>
      <NavLink to="/"><li>Home</li></NavLink>
      <li>
        <div className="dropdown dropdown-hover p-0">
          <div tabIndex={0} role="button">Hover</div>
          <ul className="dropdown-content menu bg-green-950 p-5">
            <NavLink to="/"><li>More</li></NavLink>
            <NavLink to="/"><li>More</li></NavLink>
            <NavLink to="/"><li>More</li></NavLink>
            <NavLink to="/"><li>More</li></NavLink>
          </ul>
        </div>
      </li>
      <NavLink to="/"><li>More</li></NavLink>
      <NavLink to="/"><li>Contact</li></NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex justify-center items-center gap-1">
            <img className="w-[35px]" src="https://img.icons8.com/?size=100&id=18047&format=png&color=000000" alt="" />
            <p className="md:text-2xl text-xl font-black text-[#FFFFFF]">Planto.</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-14 text-white text-xl">{navlink}</ul>
        </div>
        <div className="navbar-end relative">
          <div className="flex items-center lg:gap-14 gap-8 md:text-2xl text-xl primary-text-color">
            <div className="hidden md:block"><IoIosSearch /></div>

            {/* Cart Icon with Link */}
            <NavLink to="cart" className="relative">
              <SlHandbag className="text-2xl" />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {totalCount}
                </span>
              )}
            </NavLink>

            <TbMenuDeep />
          </div>
        </div>
      </div>
    </div>
  );
}