 import { logo } from '../../assets'
import './NavBar.css'

 const Navbar = () => {
   return (
   <nav className='flex flex-row justify-between items-center px-5 ml-20  shadow-  '>

    <div className='flex flex-row items-center gap-15'>
        <img src={logo} alt="" />

        <ul className='flex flex-row gap-12'>             <li className=''>Home</li>
             <li className=''>About Us</li>
            <li>Services</li>        </ul>
    </div>

   <div className='flex flex-row gap-4'>

        <button className='bg-gray-50 text-[#F2994A] border border-[#F2994A] rounded-md px-4 py-2'>Log in</button>        <button className='bg-[#F2994A] text-white rounded-md px-4 py-2'>Sign up</button>

      </div>

    </nav>
   )
 }
 export default Navbar



