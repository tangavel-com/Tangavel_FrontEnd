function ProductCard({product}) {
    return(
        <div>
            <div className="bg-[#000] text-[#fff] rounded-[10px] p-[20px] grid sm:grid-cols-2 gap-[20px]">
                <div className="grid gap-[20px]">
                    <h3>{product.title}</h3>
                    <div className="max-w-[200px]">
                        <img src={product.image} alt={product.imageAltText} />
                    </div>
                    <p className="text-sm">{product.note}</p>
                </div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {product.description.map((text,index)=>(
                        <p key={`${product.title}_description_${index}`}>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductCard