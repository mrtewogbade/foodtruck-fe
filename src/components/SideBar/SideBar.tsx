import { Home, Menu } from "lucide-react";
import { logo } from "../../assets";

function SideBar() {
  return (
    <div>
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
            <Menu className="text-gray-500" />
            <span>Orders</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-[#F2994A] cursor-pointer">
            <Menu className="text-gray-500" />
            <span>Profile</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
