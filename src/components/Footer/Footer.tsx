import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
        <div className="container mx-auto flex justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">
                <Link to="amamit.in">Book.It</Link>
            </span>

            <span className='flex gap-4'>
                <Link to="/signin" className="flex items-center text-white  font-bold cursor-pointer ">Privacy Policy</Link>
                <Link to="/signin" className="flex items-center text-white  font-bold cursor-pointer">Terms of service</Link>
            </span>
        </div>
    </div>
  )
}

export default Footer