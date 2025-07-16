import { useState } from "react"

function Header(){
    let [headerLinksVisibility,setHeaderLinksVisibility] = useState("false");

    function handleMenu(e) {
        console.log("click");
        e.preventDefault();
        setHeaderLinksVisibility(!headerLinksVisibility);
    }

    return(
        <div className="border rounded-[10px] p-[20px] sm:flex items-center justify-between">
            <div className="flex items-center gap-[20px]">
                <a href="/" className="flex items-center gap-[20px]">
                    <div className="max-w-[50px]">
                    <img className="w-full" src="/Logo_black.png" alt="Tangavel Logo." />
                </div>
                <h3 className="text-2xl">Tangavel</h3>
                </a>
                <div className="sm:hidden ml-auto">
                    <img onClick={handleMenu} src="/icons/Hamburger_Menu_icon.png" alt="Menu icon." className="max-w-[50px] active:scale-95 transition transform duration-100 "/>
                </div>
            </div>
            <div id="headerLinks" className={`${headerLinksVisibility?"hidden": "block"} sm:block`}>
                <ul className="sm:flex gap-[50px] items-center">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/trackorder">Track order</a>
                    </li>
                    <li>
                        <a href="/contactus">Contact us</a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="w-[100px] border-none rounded-[10px] py-[15px] px-[15px] bg-[#F8AA03] hover:cursor-pointer hover:scale-102">Login</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header