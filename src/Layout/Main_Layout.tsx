import type React from "react"
import Home_Main_Layout from "../Pages/Home/Home_Main_layout"
import Footer from "../Pages/Footer/Footer"

const  Main_Layout:React.FC=() => {
  return (
    <section className=" inter bg-[#031e0add] px-2">
          <Home_Main_Layout></Home_Main_Layout>
        <div className="mt-20">
            <Footer></Footer>
        </div>
    </section>
  )
}

export default Main_Layout



