import { foodplate } from "../../assets";
import SearchBar from "../SearchBar";

const Homepage = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-gray-100 p-4 gap-5">
      <div>
        <p>
          <span className="text-[#F2994A] ">Hungry? </span>Let’s Fix That Order
          Your Favourites!
        </p>
        <p>Discover the best food trucks in your area.</p>

        <div className="flex flex-row gap-0">
          
          <div className="mt-4">
            <SearchBar />
          </div>
          <button className="bg-[#F2994A] text-white rounded-md px-4 py-1">Search Now</button>
        </div>
        
      </div>
      <img className="w-[500px] h-[500px] opacity-100 relative" src={foodplate} alt="" />
    </div>
  );
};

export default Homepage;
