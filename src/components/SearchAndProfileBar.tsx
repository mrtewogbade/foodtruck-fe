// Search, Profile Icon, Name and Notification Bar

import { Search, Bell } from "lucide-react";
import { searchTexts, user } from "../assets";

export default function SearchAndProfileBar() {
  return (
    <div className="flex flex-row items-start">
      <div className="flex items-center justify-between bg-white w-full p-5">
        <div className="flex items-center w-[390px] h-12 border border-gray-300 rounded-lg px-7 py-6 pl-4 bg-white shadow-sm -gap-50 ">
   
          <Search className="text-gray-500 w-5 h-5 ml-10 mr-5" />

          <input
            type="text"
            placeholder={searchTexts.searchPlaceholder}
            className="flex-5 outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
          {/* Search Button */}
        </div>

        <div className="flex flex-row items-center justify-center">
          <Bell className="text-gray-500 w-5 h-5 ml-10 mr-5" />

          {/* Only user first name's character */}
          <h1 className="w-5 h-5 border-none rounded-2xl text-blue-900 bg-blue-100 flex items-center justify-center">
            {user.name.charAt(0).toUpperCase()}
          </h1>

          <h1>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h1>
        </div>
      </div>
    </div>
  );
}
