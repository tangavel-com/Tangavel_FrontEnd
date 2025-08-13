let url = import.meta.env.VITE_BackendURL;

async function sendQuotationRequestDetails(payload){
    console.log(url, payload);
    
    let res = await fetch(`${url}/leads`, {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })
    let data = await res.json();
    console.log(data)
    return data;
}

export {sendQuotationRequestDetails}