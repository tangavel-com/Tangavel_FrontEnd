import { useState } from "react";

function AddProduct() {

    let [imageFile,setImageFile] = useState()

    function handleAddImage(e) {
        e.preventDefault();
        let imageInput = document.querySelector("#imageInput");
        imageInput.click();     
    }

    function handleImageChange(e){
        e.preventDefault()
        console.log(e.target.files[0]);
        setImageFile(e.target.files[0]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(imageFile);
    }

    return(
        <div className="grid gap-[50px]">
            <div>
                <h1 className="text-4xl">Add Product</h1>
            </div>
            <div>
                <form action="" className="grid gap-[50px]">
                    <div className="grid gap-[20px]">
                        <input name="title" type="text" placeholder="Product title" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="note" type="text" placeholder="Product note" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                        <input name="imageAltText" type="text" placeholder="Image Alt Text" className="border rounded-[10px] min-h-[50px] px-[10px]"/>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <button onClick={handleAddImage} className="border rounded-[10px] min-h-[50px] px-[10px]">Add image</button>
                        <p>{imageFile?`${imageFile.name} file added.`:"Upload file."}</p>
                        <input id="imageInput" type="file" onChange={handleImageChange} className="hidden"/>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleSubmit} className="border rounded-[10px] min-h-[50px] px-[10px]">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct