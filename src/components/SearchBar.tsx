import { Search } from "lucide-react"; // install lucide-react if not already
import { foodtext } from "../assets";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[390px] h-12 border border-gray-300 rounded-lg px-7 py-6 pl-4 bg-white shadow-sm -gap-50 ">
      {/* Search Icon */}
      <Search className="text-gray-500 w-5 h-5 ml-10 mr-5" />

      {/* Input */}
      <input
        type="text"
        placeholder={foodtext.searchPlaceholder}
        className="flex-5 outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
      {/* Search Button */}
      <button className="bg-[#F2994A] text-white  hover:bg-orange-500  rounded h-13 w-27 ml-1 -mx-32 shadow-md ">
        Search Now
      </button>
    </div>
    

    
  );
};

export default SearchBar;
