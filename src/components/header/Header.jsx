import { useState } from "react"
import { Link } from "react-router-dom";

function Header(){
    let [headerLinksVisibility,setHeaderLinksVisibility] = useState("false");

    function handleMenu(e) {
        // console.log("click");
        // e.preventDefault();
        setHeaderLinksVisibility(!headerLinksVisibility);
    }

    return(
        <div className="border rounded-[10px] p-[20px] sm:flex items-center justify-between">
            <div className="flex items-center gap-[20px]">
                <Link to="/" className="flex items-center gap-[20px]">
                    <div className="max-w-[50px]">
                        <img className="w-full" src="/Logo_black.png" alt="Tangavel Logo." />
                    </div>
                    <h3 className="text-2xl">Tangavel</h3>
                </Link>
                <div className="sm:hidden ml-auto">
                    <img onClick={handleMenu} src="/icons/Hamburger_Menu_icon.png" alt="Menu icon." className="max-w-[50px] active:scale-95 transition transform duration-100 "/>
                </div>
            </div>
            <div id="headerLinks" className={`${headerLinksVisibility?"hidden": "block"} sm:block`}>
                <ul className="flex flex-col sm:flex-row gap-[50px] items-center">
                    <li>
                        <Link onClick={handleMenu} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={handleMenu} to="/products">Products</Link>
                    </li>
                    <li>
                        <Link onClick={handleMenu} to="/trackorder">Track order</Link>
                    </li>
                    <li>
                        <Link onClick={handleMenu} to="/contactus">Contact us</Link>
                    </li>
                    <li>
                        <Link onClick={handleMenu} to="/quotationform">
                            <button className="min-w-[100px] border-none rounded-[10px] py-[15px] px-[15px] bg-[#F8AA03] hover:cursor-pointer hover:scale-102">Get quotation</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header