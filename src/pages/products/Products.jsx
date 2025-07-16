import ProductCard from "../../components/productCard/ProductCard";
import productList from "./productList.js"

function Products() {
    // console.log(productList);
    return(
        <div className="grid gap-[50px]">
            
            <div className="grid gap-[20px]">
                <h1 className="text-4xl">Products</h1>
                <p>
                    All products and variety are not listed. Get in touch with us with the product details. 
                    We will get back to you with a quote.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-[20px]">
                
                {/* <div>
                    <div className="bg-[#000] text-[#fff] rounded-[10px] p-[20px] grid grid-cols-2">
                        <div className="grid gap-[20px]">
                            <h3>Spices</h3>
                            <div className="max-w-[200px]">
                                <img src="/images/products/Spices.png" alt="Spices kept on a table image." />
                            </div>
                            <p className="text-sm">(All varieties raw and powdered)</p>
                        </div>
                        <div className="grid gap-auto">
                            <p>Pepper</p>
                            <p>Chilli</p>
                            <p>Salt</p>
                            <p>Turmeric</p>
                            <p>Cinnamon</p>
                            <p>Cardamom</p>
                            <p>Other spices</p>
                        </div>
                    </div>
                </div> */}

                {productList.map((product,index)=>(
                    <ProductCard key={index} product={product}/>
                ))}

            </div>
            
        </div>
    )
}

export default Products