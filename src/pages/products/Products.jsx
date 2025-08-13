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

                {productList.map((product,index)=>(
                    <ProductCard key={index} product={product}/>
                ))}

            </div>
            
        </div>
    )
}

export default Products