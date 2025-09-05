import {
  Home,
  Menu,
  TruckElectric,
  History,
  Settings,
  LogOut,
} from "lucide-react";
import { logo } from "../../assets";

function SideBar() {
  return (
    <div className="flex flex-col p-4 bg-white shadow-md h-screen w-64 sticky top-0">
      <nav className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="Foodie" className="h-8" />
        </div>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 text-gray-700 hover:text-[#F2994A] cursor-pointer">
            <Home className="text-gray-500" />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-[#F2994A] cursor-pointer">
            <Menu className="text-gray-500" />
            <span>Menu</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-[#F2994A] cursor-pointer">
            <TruckElectric className="text-gray-500" />
            <span>Track Order</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-[#F2994A] cursor-pointer">
            <History className="text-gray-500" />
            <span>Order History</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-[#F2994A] cursor-pointer">
            <Settings className="text-gray-500" />
            <span>Settings</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-[#F2994A] cursor-pointer">
            <LogOut className="text-gray-500" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>

      <div className="mt-auto w-full p-4 rounded-[20px] shadow-md bg-[#F2994AF5]">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-white text-sm mb-3">
            Upgrade your Account to get a free Voucher
          </h3>
          <button className="bg-white text-[#F2994A] rounded-md px-4 py-2 text-sm font-medium">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;