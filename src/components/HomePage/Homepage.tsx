import { foodplate, recOne,recTwo, recThree } from "../../assets";
import SearchBar from "../SearchBar";

const Homepage = () => {
  return (
    <div>
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

    <div className="flex flex-col items-center justify-center p-4">

      <div className="flex flex-col items-center">
        <h1>Our Services</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <img src={recOne} alt="" />
            <h3>Top Restaurants within your Reach</h3>
            <p>Discover the best dining options nearby.</p>
          </div>
          <div>
            <img src={recTwo} alt="" />
            <h3>Fast Delivery to Your Doorstep</h3>
            <p>Enjoy quick and convenient food delivery.</p>
          </div>
          <div>
            <img src={recThree} alt="" />
            <h3>Exclusive Deals and Offers</h3>
            <p>Save more with our special promotions.</p>
          </div>
        </div>
      </div>





    </div>
    </div>
  );
};

export default Homepage;
