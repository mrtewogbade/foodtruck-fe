
import SideBar from "../SideBar";
import SearchBar  from "../SearchBar";
 import dishimg from '../../assets/Frame 38813902.svg'
 import frameimg from '../../assets/Frame 38813934 (1).svg'
 import { ShoppingCart } from "lucide-react"


const Description = () => {
  return (
    <div className="flex  ">
      <div className="w-1/7 h-screen pl-2">
        <SideBar />
      </div>
      <div className="flex-1 ml-9 bg-gray-50 h-screen overflow-y-auto">
        <div className="border-b border-white-200 pl-20">  <SearchBar />
        </div>
       <div className="flex justify-center items-start mt-12 gap-4">
      <img src={dishimg} alt="Dish" className="w-[1000px] h-auto  object-contain" />
    </div>

     <div className="pl-20 pt-9">
            <h1 className="text-2xl font-semibold pt-5 text-gray-800">
              Peppered lap with Grilled Fish
            </h1>
            <p className="text-lg text-gray-500 pt-3 mt-2">₦5,000</p>
          </div>
          <p className="text-gray-600 max-w-2xl pt-5 pl-20">
            Lorem ipsum dolor sit amet consectetur. Fringilla odio malesuada
            maecenas sit magna vulputate ullamcorper nisl ac. Ullamcorper duis
            sed quisque pellentesque. Diam molestie euismod fringilla eu
            fringilla libero consequat convallis tortor.
          </p>
          <div className="flex justify-start items-center gap-4 pt-10 pl-20">
            <img src={frameimg} alt="frame" className="w-auto " />
           </div>
             <div className="flex gap-4 mt-10 pl-20 pt-10 ">

      <button className="w-48 py-3 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-50 transition flex items-center justify-center gap-2">
        <ShoppingCart className="w-5 h-5 text-orange-400" />
        Add to Cart
      </button>

      {/* Order Now button */}
      <button className="w-48 py-3 bg-orange-400 text-white rounded-lg  hover:bg-orange-600 transition">
        Order Now
      </button>
    </div>  
       </div>
     </div>
  );
  };

export default Description;
