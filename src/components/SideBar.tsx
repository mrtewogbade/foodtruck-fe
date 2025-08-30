import React from 'react';
import { House, Menu as MenuIcon, RefreshCcw, Clock, Settings, LogOut } from 'lucide-react';
import logo from '../assets/logo.jpg'


type NavItemProps = {
  icon: React.ReactNode;
  label: string;
};



const NavItem = ({ icon, label }: NavItemProps) => (
  <div className="flex items-center gap-6 text-gray-800 text-base cursor-pointer" >
    <div className='w-6 h-6'>{icon}</div>
    <span className='whitespace-nowrap'>{label}</span>
  </div>
);
const Sidebar = () => {
  return (
    <div className="w-[271px] h-full bg-white relative font-sans">

      <img src={logo} alt="Logo" className="absolute top-6 left-6 w-32 h-12" />
      <div
        className="absolute top-[124px] left-[29px] w-[127px] h-[269px] flex flex-col gap-[20px] opacity-100 transform rotate-0">
        <NavItem icon={<House />} label="Home" />
        <NavItem icon={<MenuIcon />} label="Menu" />
        <NavItem icon={<RefreshCcw />} label="Track Order" />
        <NavItem icon={<Clock />} label="Order History" />
        <NavItem icon={<Settings />} label="Settings" />
        <NavItem icon={<LogOut />} label="Logout" />
      </div>
       {/* Voucher Card */}
<div className="absolute bottom-10 left-6 w-56 bg-[#e97611]
 rounded-lg p-4 shadow">
  <p className="text-sm text-amber-50 mb-2">
    Upgrade your Account to get a free Voucher
  </p>
  <button className="w-full bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-300">
    Add To Cart
  </button>
</div>

    
    </div>
  );
};




export default Sidebar;