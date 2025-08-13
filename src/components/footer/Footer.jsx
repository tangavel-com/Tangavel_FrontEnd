import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className="bg-[#000] text-[#fff] rounded-[10px] p-[20px] flex justify-between">
            <div className="grid gap-[20px]">
                
                <div className="flex items-center gap-[10px]">    
                    <Link to="/" className="flex items-center gap-[10px]">            
                    <div className="max-w-[50px]">
                        <img src="/Logo_white.png" alt="Logo" />
                    </div>
                    <h3 className="text-2xl">Tangavel</h3>
                    </Link>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p>Email: contact.tangavel@gmail.com</p>
                    <p>Location: Tangavel, No 44, Kolathur Main Rd, Vetrivelan Nagar, Muthamizh Nagar, Kolathur, Chennai, Tamil Nadu 600099</p>
                </div>
            </div>
            <div className="flex gap-[50px]">
                <ul className="flex flex-col gap-[10px]">
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/trackorder">Track order</Link></li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li><Link to="/contactus">Contact us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer