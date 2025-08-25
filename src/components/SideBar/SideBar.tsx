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
    <div className="flex flex-col">
      <nav className="flex flex-col items-start p-4 bg-white shadow-md h-screen w-64">
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

      <div
        className="flex flex-col justify-center items-center w-[187px] h-[148px] absolute top-[497px] left-[31px] rotate-0 opacity-100 rounded-[20px] shadow-md bg-[#F2994AF5]
"
      >
        {/* Card content here */}

        <h3 className="text-white ">
          Upgrade your Account to get a free Voucher
        </h3>

        <button className="bg-white text-[#F2994A] rounded-md  w-[95px] h-[35px]">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default SideBar;
