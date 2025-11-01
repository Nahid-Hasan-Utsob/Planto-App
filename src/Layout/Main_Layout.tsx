import type React from "react"
import Footer from "../Pages/Footer/Footer"
import { Outlet } from "react-router-dom"
import Navbar_Top from "../components/Navbar_Top"

const  Main_Layout:React.FC=() => {
  return (
    <section className=" inter bg-[#031e0add] px-2">
       <Navbar_Top></Navbar_Top>
          <Outlet></Outlet>
        <div className="mt-20">
            <Footer></Footer>
        </div>
    </section>
  )
}

export default Main_Layout



