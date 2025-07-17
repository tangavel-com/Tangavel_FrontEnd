import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "../pages/about/About.jsx";
import QuotationForm from "../pages/quotationForm/QuotationForm.jsx";
import Products from "../pages/products/Products.jsx";
import TrackOrder from "../pages/trackOrder/TrackOrder.jsx";
import ContactUs from "../pages/contactUs/ContactUs.jsx";
import AddProduct from "../pages/addProduct/AddProduct.jsx";
import ScrollToTop from "../components/scrollToTop/ScrollToTop.js";

function AppRouter(){
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/quotationform" element={<QuotationForm/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/trackorder" element={<TrackOrder/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>
                    <Route path="/addproduct" element={<AddProduct/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter