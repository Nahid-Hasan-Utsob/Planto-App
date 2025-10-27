import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { TbMenuDeep } from "react-icons/tb";

export default function Navbar_Top() {
  const navlink = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>

      <li>
        <div className="dropdown dropdown-hover p-0">
          <div tabIndex={0} role="button" className="">
            Hover
          </div>
          <ul className="dropdown-content menu bg-green-950 p-5">
            <NavLink to={"/"}>
              <li>More</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>More</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>More</li>
            </NavLink>
            <NavLink to={"/"}>
              <li>More</li>
            </NavLink>
          </ul>
        </div>
      </li>

      <NavLink to={"/"}>
        <li>More</li>
      </NavLink>

      <NavLink to={"/"}>
        <li>Contact</li>
      </NavLink>
    </>
  );

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
            <p className="text-2xl font-black text-[#FFFFFF]">Planto.</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-14 text-white text-xl">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-14 text-2xl primary-text-color">
            <div className="">
              <IoIosSearch></IoIosSearch>
            </div>
            <SlHandbag></SlHandbag>
            <TbMenuDeep></TbMenuDeep>
          </div>
        </div>
      </div>
    </div>
  );
}
