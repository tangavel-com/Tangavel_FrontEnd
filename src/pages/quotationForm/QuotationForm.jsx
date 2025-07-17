import { useState } from "react";

function QuotationForm() {

    let [productSection, setProductSection] = useState([1]);

    let [formValues, setFormValues] = useState({});

    function handleChange(e){
        e.preventDefault();
        setFormValues((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        })
        );
    }

    function addProduct(e) {
        e.preventDefault();
        setProductSection([...productSection,productSection.length+1]);
    }

    function handleGetQuotation(e){
        e.preventDefault();
        console.log(formValues);
    }

    return(
        <div>
            
            <h1 className="text-4xl">Request for quotation</h1>
            

            <form action="">

                {/* <h3 className="text-2xl">Quotation form</h3> */}
                <div className="mt-[50px] grid gap-[50px]">

                    <div className="grid sm:grid-cols-3 gap-x-[100px] gap-y-[20px]">
                        <p className="sm:col-span-3">Buyer details:</p>
                        <input name="FullName" onChange={handleChange} value={formValues.FullName || ""} type="text" placeholder="Full Name" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="Email" onChange={handleChange} value={formValues.Email || ""} type="text" placeholder="Email Id" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="Mobile" onChange={handleChange} value={formValues.Mobile || ""} type="text" placeholder="Mobile number" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="Destination" onChange={handleChange} value={formValues.Destination || ""} type="text" placeholder="Destination port/airport/city name" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="StatePincode" onChange={handleChange} value={formValues.StatePincode || ""} type="text" placeholder="State / Province name and pincode" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="Country" onChange={handleChange} value={formValues.Country || ""} type="text" placeholder="Country" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                    </div>
                    <div className="grid gap-y-[20px]">
                        <p>Product details:</p>

                        {productSection.map((val)=>(
                            <div key={val} className="grid sm:grid-cols-3 gap-x-[100px] gap-y-[20px]">
                                <p className="sm:col-span-3">Product {val}: {formValues[`ProductName_${val}`]}</p>
                                <input 
                                    name={`ProductName_${val}`}
                                    type="text"
                                    placeholder="Product name"
                                    className="border rounded-[10px] min-h-[50px] px-[10px]"
                                    value={formValues[`ProductName_${val}`]||""}
                                    onChange={handleChange}
                                />
                                <input 
                                    name={`ProductDescription_${val}`} 
                                    type="text" 
                                    placeholder="Description / Variety / HSCode" 
                                    className="border rounded-[10px] min-h-[50px] px-[10px]" 
                                    value={formValues[`ProductDescription_${val}`] ||""} 
                                    onChange={handleChange}
                                />
                                <input 
                                    name={`ProductQuantity_${val}`} 
                                    type="text" 
                                    placeholder="Quantity and packing details" 
                                    className="border rounded-[10px] min-h-[50px] px-[10px]"
                                    value={formValues[`ProductQuantity_${val}`]||""}
                                    onChange={handleChange}
                                />

                            </div>
                        ))}

                    </div>
                    <div className="grid sm:grid-cols-3 gap-x-[100px] gap-y-[20px]">
                        <button onClick={addProduct} className="sm:col-start-2 text-[#d9d9d9] border border-[#d9d9d9] rounded-[10px] min-h-[50px] px-[10px] hover:text-[#000] hover:border-[#000] hover:font-medium">Add product</button>
                    </div>

                </div>
                <div className="mt-[20px] grid sm:grid-cols-3 gap-x-[100px] gap-y-[20px]">
                    <button onClick={handleGetQuotation} className="sm:ml-auto sm:max-w-[150px] sm:col-start-3 bg-[#F8AA03] rounded-[10px] min-h-[50px] px-[10px] hover:scale-102">Get quotation</button>
                </div>

            </form>

        </div>
    )
}

export default QuotationForm