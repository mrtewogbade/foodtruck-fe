import React from 'react';
import { House, Menu as MenuIcon, RefreshCcw, Clock, Settings, LogOut } from 'lucide-react';



const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-6 text-gray-800 text-base cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);
const Sidebar = () => {
  return (
    <div className="w-[271px] h-screen bg-white relative font-sans">
      <div
        className="absolute top-[124px] left-[29px] w-[127px] h-[269px] flex flex-col gap-[24px]opacity-100 transform rotate-0">
        <NavItem icon={<House />} label="Home" />
        <NavItem icon={<MenuIcon />} label="Menu" />
        <NavItem icon={<RefreshCcw />} label="Track Order" />
        <NavItem icon={<Clock />} label="Order History" />
        <NavItem icon={<Settings />} label="Settings" />
        <NavItem icon={<LogOut />} label="Logout" />
      </div>
    </div>
  );
};




export default Sidebar;