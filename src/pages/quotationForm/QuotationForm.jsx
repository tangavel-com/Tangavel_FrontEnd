import { useState } from "react";
import { sendQuotationRequestDetails } from "../../api/quotationForm.js";

function QuotationForm() {

    let [productSection, setProductSection] = useState([1]);

    let [formValues, setFormValues] = useState({});


    let [buyerDetails,setBuyerDetails] = useState({});

    let [productDetails,setProductDetails] = useState([
        {
            ProductName:"",
            ProductDescription:"",
            ProductQuantity:""
        }
    ]);

    function handleBuyerDetailsChange(e) {
        e.preventDefault();
        setBuyerDetails({
            ...buyerDetails,
            [e.target.name]: e.target.value
        })
    }

    function handleAddProduct(e){
        e.preventDefault();
        setProductDetails([
            ...productDetails,
            {
                ProductName:"",
                ProductDescription:"",
                ProductQuantity:""
            }
        ])
    }

    function handleProductDetailsChange(e,index) {
        
        let updatedProductDetails = [...productDetails]
        updatedProductDetails[index][e.target.name] = e.target.value
        setProductDetails(updatedProductDetails);

    }

    function handleGetQuotation(e){
        e.preventDefault();
        console.log({buyerDetails,productDetails})
        sendQuotationRequestDetails({buyerDetails,productDetails})
    }

    return(
        <div>
            
            <h1 className="text-4xl text-center sm:text-left">Request for quotation</h1>

            <form action="">

                {/* <h3 className="text-2xl">Quotation form</h3> */}
                <div className="mt-[50px] grid gap-[50px]">

                    <div className="grid sm:grid-cols-3 gap-x-[100px] gap-y-[20px]">
                        <p className="sm:col-span-3">Buyer details:</p>
                        <input name="fullName" onChange={handleBuyerDetailsChange} value={buyerDetails.fullName || ""} type="text" placeholder="Full Name" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="emailId" onChange={handleBuyerDetailsChange} value={buyerDetails.emailId || ""} type="text" placeholder="Email Id" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="mobileNumber" onChange={handleBuyerDetailsChange} value={buyerDetails.mobileNumber || ""} type="text" placeholder="Mobile number" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="Destination" onChange={handleBuyerDetailsChange} value={buyerDetails.Destination || ""} type="text" placeholder="Destination port/airport/city name" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="StatePincode" onChange={handleBuyerDetailsChange} value={buyerDetails.StatePincode || ""} type="text" placeholder="State / Province name and pincode" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="Country" onChange={handleBuyerDetailsChange} value={buyerDetails.Country || ""} type="text" placeholder="Country" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                    </div>
                    <div className="grid gap-y-[20px]">
                        <p>Product details:</p>

                        {productDetails.map((val,index)=>(
                            <div key={index} className="grid sm:grid-cols-3 gap-x-[100px] gap-y-[20px]">
                                <p className="sm:col-span-3">Product {index+1} : {productDetails[index].ProductName}</p>
                                <input 
                                    name="ProductName"
                                    type="text"
                                    placeholder="Product name"
                                    className="border rounded-[10px] min-h-[50px] px-[10px]"
                                    value={productDetails[index].ProductName||""}
                                    onChange={(e)=>handleProductDetailsChange(e,index)}
                                />
                                <input 
                                    name={`ProductDescription`} 
                                    type="text" 
                                    placeholder="Description / Variety / HSCode" 
                                    className="border rounded-[10px] min-h-[50px] px-[10px]" 
                                    value={productDetails[index].ProductDescription ||""} 
                                    onChange={(e)=>handleProductDetailsChange(e,index)}
                                />
                                <input 
                                    name={`ProductQuantity`} 
                                    type="text" 
                                    placeholder="Quantity and packing details" 
                                    className="border rounded-[10px] min-h-[50px] px-[10px]"
                                    value={productDetails[index].ProductQuantity||""}
                                    onChange={(e)=>handleProductDetailsChange(e,index)}
                                />

                            </div>
                        ))}

                    </div>
                    <div className="grid sm:grid-cols-3 gap-x-[100px] gap-y-[20px]">
                        <button onClick={handleAddProduct} className="sm:col-start-2 text-[#d9d9d9] border border-[#d9d9d9] rounded-[10px] min-h-[50px] px-[10px] hover:text-[#000] hover:border-[#000] hover:font-medium">Add product</button>
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