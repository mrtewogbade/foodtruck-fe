import { Search } from "lucide-react"; // install lucide-react if not already
import { foodtext } from "../assets";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[320px] h-12 border border-gray-300 rounded-lg px-3 bg-white shadow-sm">
      {/* Search Icon */}
      <Search className="text-gray-500 w-5 h-5 mr-2" />

      {/* Input */}
      <input
        type="text"
        placeholder={foodtext.searchPlaceholder}
        className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;
