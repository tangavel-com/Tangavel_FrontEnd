function Footer(){
    return(
        <div className="bg-[#000] text-[#fff] rounded-[10px] p-[20px] flex justify-between">
            <div className="grid gap-[20px]">
                <div className="flex items-center gap-[10px]">
                    <div className="max-w-[50px]">
                        <img src="/Logo_white.png" alt="Logo" />
                    </div>
                    <h3 className="text-2xl">Tangavel</h3>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p>Email: contact.tangavel@gmail.com</p>
                    <p>Location: The Executive Zone-Thousand Lights, Chennai, Tamil Nadu, 600002.</p>
                </div>
            </div>
            <div className="flex gap-[50px]">
                <ul className="flex flex-col gap-[10px]">
                    <li><a href="/products">Products</a></li>
                    {/* <li><a href="">Services</a></li> */}
                    <li><a href="/trackorder">Track order</a></li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li><a href="/contactus">Contact us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer