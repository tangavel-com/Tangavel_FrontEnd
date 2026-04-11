import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div className="grid gap-[50px]">
      <div>
        <h1 className="text-4xl">Contact us</h1>
      </div>
      <div className="grid  gap-[20px]">
        <div className="flex justify-center items-center">
          <p className="">Email: contact.tangavel@gmail.com</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="">Mobile: +91 9445263322</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="">
            Whatsapp:{' '}
            <Link
              className="text-green-500 underline"
              to="https://wa.me/+919445263322"
              target="_blank"
            >
              https://wa.me/+919445263322
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
