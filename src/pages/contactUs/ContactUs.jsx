function ContactUs() {
    return(
        <div className="grid gap-[50px]">
            <div>
                <h1 className="text-4xl">Contact us</h1>
            </div>
            <div className="grid sm:grid-cols-3 gap-[20px]">
                <div className="flex justify-center items-center"><p className="text-2xl">Under</p></div>
                <div className="flex justify-center items-center"><img className="max-h-[500px]" src="/images/CodingOnLaptop.png" alt="Person coding on a laptop." /></div>
                <div className="flex justify-center items-center"><p className="text-2xl">construction.</p></div>            
            </div>
        </div>
    )
}

export default ContactUs