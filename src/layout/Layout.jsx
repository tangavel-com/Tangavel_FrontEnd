import { Outlet } from "react-router-dom"
import Header from "../components/header/Header.jsx"
import Footer from "../components/footer/Footer.jsx"

function Layout(){
    return(
        <div className="py-[50px] grid grid-cols-12 gap-[10px]">
            <div className="col-span-10 col-start-2">
                <Header/>
            </div>
            <div className="col-span-10 col-start-2 min-h-[55dvh] my-[50px] ">
                <Outlet/>
            </div>
            <div className="hidden sm:block col-span-10 col-start-2">
                <Footer/>
            </div>
        </div>
    )
}

export default Layout