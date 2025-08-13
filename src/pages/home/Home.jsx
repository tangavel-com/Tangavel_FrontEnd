import { Link } from "react-router-dom"

function Home(){
    return(
        <div className="grid gap-[50px]">
            
            {/* SECTION 1. Import Export company. */}
            <div className="grid gap-[50px] sm:flex sm:gap-[100px] items-center justify-between">
                <div className="grid gap-[20px]">
                    <p>முருகன் துணை. யாம் இருக்க பயம் ஏன்.</p>
                    <h1 className="text-4xl">Export and Import Company</h1>
                    <p>
                        We specialize in sourcing high-quality products, managing logistics with 
                        precision, and ensuring reliable, on-time delivery. With a global reach
                        and a commitment to excellence, we're your trusted partner in every
                        shipment.
                    </p>
                    <div className="grid gap-y-[10px] sm:flex gap-[50px]">
                        <Link className="border-none rounded-[10px] px-[15px] py-[15px] bg-[#F8AA03] hover:cursor-pointer hover:scale-102" to="/quotationform"> Get price details </Link>
                        <Link className="border rounded-[10px] px-[15px] py-[15px] bg-[#000] text-[#fff] hover:cursor-pointer hover:scale-102" to="/products"> List of products </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-[10px]" src="/images/Spice_map_of_the_world.png" alt="World map layout made out of spice." />
                    </div>
                </div>
            </div>

            {/* SECTION 2. We do. */}

            <div className="flex gap-[20px] items-center">
                <img className="max-w-[100px] " src="/icons/Container_icon.png" alt="Container icon." />
                <h1 className="text-4xl">We do</h1>
            </div>

            <div className="sm:flex gap-[50px]">
                <div className="hidden xl:block max-w-[400px]">
                    <img className="rounded-[10px]" src="/images/Comodity_export.png" alt="Multi products on display and container ship loading photo." />
                </div>
                <div className="px-[50px] py-[20px] bg-[#000] text-[#fff] w-full border border-[#fff] rounded-[10px] flex flex-col gap-[20px]">
                    <h1 className="text-4xl">Commodity Export</h1>
                    <p className="hidden sm:block">
                        We export wide range of products to consumers around the world. All varieties including raw,
                        powdered, processed, ready to cook, ready to eat, decors, cloths, textiles, apparels and so on.
                        Some of the categories are listed below.
                    </p>
                    <div className="sm:flex gap-[50px]">
                        <ul className="hidden sm:flex flex-col gap-[10px]">
                            <li>Spices</li>
                            <li>Cereals</li>
                            <li>Vegetables</li>
                            <li>Fruits</li>
                            <li>Textiles</li>
                            <li>Handcrafts</li>
                            <li>Tiles</li>
                            <li>Ready to cook</li>
                            <li>Ready to eat</li>
                            <li>And other products</li>
                        </ul>
                        <ul className="hidden sm:flex flex-col gap-[10px]">
                            <li>Ready to cook</li>
                            <li>Ready to eat</li>
                            <li>And other products</li>
                        </ul>
                        <div className="md:ml-auto">
                            <img className="sm:max-w-[300px] rounded-[10px] border border-[#fff]" src="/images/HandCraftsOnTable.png" alt="Handcraft items on a table." />
                        </div>
                    </div>
                    <div>
                        <Link to="/products/#" className="block border rounded-[10px] p-[15px] text-center hover:cursor-pointer hover:scale-102">List of products</Link>
                    </div>
                </div>
            </div>

            {/* SECTION 3. Route map */}

            <div className="flex gap-[20px] items-center">
                <img className="max-w-[100px] " src="/icons/Sailing_ship_icon.png" alt="Sailing ship icon." />
                <h1 className="text-4xl">Route map</h1>
            </div>

            <div className="grid sm:grid-cols-3 gap-[100px]">
                <div className="border rounded-[10px] p-[20px] grid gap-[20px]">
                    <h2 className="text-2xl">
                        Get quotation
                    </h2>
                    <div className="max-w-[300px]">
                        <img className="rounded-[10px]" src="/images/Costing.png" alt="" />
                    </div>
                    <ul className="grid gap-[10px]">
                        <li>Fill requirement form.</li>
                        <li>Receive quotation.</li>
                    </ul>
                    <div className="flex justify-center">
                        <Link className="xl:min-w-[150px] max-w-[150px] border rounded-[10px] p-[15px] hover:cursor-pointer hover:scale-102 text-center" to="/quotationform">Get quotation</Link>
                    </div>
                </div>
                <div className="border rounded-[10px] p-[20px] grid gap-[20px]">
                    <h2 className="text-2xl">
                        Order confirmation
                    </h2>
                    <div className="max-w-[300px]">
                        <img className="rounded-[10px]" src="/images/Handshake.png" alt="" />
                    </div>
                    <ul className="grid gap-[10px]">
                        <li>Provide order confirmation.</li>
                        <li>Confirm Payment terms and INCO terms.</li>
                    </ul>
                    <div className="flex justify-center">
                        <Link className="xl:min-w-[150px] max-w-[150px] border rounded-[10px] p-[15px] hover:cursor-pointer hover:scale-102 text-center" to="/trackorder">Track order</Link>
                    </div>
                </div>
                <div className="border rounded-[10px] p-[20px] grid gap-[20px]">
                    <h2 className="text-2xl">
                        Product delivery
                    </h2>
                    <div className="max-w-[300px]">
                        <img className="rounded-[10px]" src="/images/Delivery.png" alt="" />
                    </div>
                    <ul className="grid gap-[10px]">
                        <li>Get clearence documents.</li>
                        <li>Receive products.</li>
                    </ul>
                    <div className="flex justify-center">
                        <Link className="xl:min-w-[150px] max-w-[150px] border rounded-[10px] p-[15px] hover:cursor-pointer hover:scale-102 text-center" to="/trackorder">Delivery status</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home