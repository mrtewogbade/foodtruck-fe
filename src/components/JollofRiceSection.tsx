import PepperBowl from '../assets/pepper-bowl.jpg';
import Tray from '../assets/tray.jpg';
import MeatChicken from'../assets/meat-chicken.jpg';


const JollofRiceSection = () => {
  return (
    <div className="absolute w-[1101px] h-[657.32px] top-[366px] left-[315px] opacity-100 rotate-0 flex gap-4">
      <div>
       <div className="w-[201px] h-[201px] rotate-0 opacity-100 rounded-[10px] bg-white shadow-[0px_2.95px_7. 87px_#00000029] p-4 flex flex-col gap-[16px]">
        {/* Image */}
        <img
          src={PepperBowl}
          alt="Pepper Bowl"
          className="w-[168.14px] h-[96.36px] rounded-[9.83px] opacity-100"
        />

        {/* Text + Button Frame */}
        <div className="w-[171px] h-[69.79px] flex flex-col gap-[8px] opacity-100">
          {/* Text Block */}
          <div className="w-[171px] h-[39px] flex flex-col gap-[4px]">
            <p className="font-inter font-semibold text-[13px] leading-[12.29px] tracking-[0]">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-[10px] leading-[140%] text-gray-700">
              Lorem ipsum dolor sit amet consectetur. <br /> Mattis interdum lectus proin adipiscing quis eu.
             
            </p>
          </div>

          {/* Button */}
          <button
            className="w-[80.39px] h-[22.79px] opacity-100 rotate-0 px-2 py-1 bg-orange-500 text-white font-bold text-[8px] leading-[140%] tracking-[-0.25px] rounded flex items-center justify-center"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="w-[201px] h-[201px] rotate-0 opacity-100 rounded-[10px] bg-white shadow-[0px_2.95px_7. 87px_#00000029] p-4 flex flex-col gap-[16px]">
        {/* Image */}
        <img
          src={Tray}
          alt="Tray"
          className="w-[168.14px] h-[96.36px] rounded-[9.83px] opacity-100"
        />

         {/* Text + Button Frame */}
        <div className="w-[171px] h-[69.79px] flex flex-col gap-[8px] opacity-100">
          {/* Text Block */}
          <div className="w-[171px] h-[39px] flex flex-col gap-[4px]">
            <p className="font-inter font-semibold text-[13px] leading-[12.29px] tracking-[0]">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-[10px] leading-[140%] text-gray-700">
              Lorem ipsum dolor sit amet consectetur.
              Mattis interdum lectus proin adipiscing quis eu.
            </p>
          </div>

          {/* Button */}
          <button
            className="w-[80.39px] h-[22.79px] opacity-100 rotate-0 px-2 py-1 bg-orange-500 text-white font-bold text-[8px] leading-[140%] tracking-[-0.25px] rounded flex items-center justify-center"
          >
            Add To Cart
          </button>
        </div>
      </div>
     </div>
    
     <div className="w-[201px] h-[201px] rotate-0 opacity-100 rounded-[10px] bg-white shadow-[0px_2.95px_7. 87px_#00000029] p-4 flex flex-col gap-[16px]">
      {/* Image */}
      <img
        src={MeatChicken}
        alt="Meat Chicken"
        className="w-[168.14px] h-[96.36px] rounded-[9.83px] opacity-100"
      />

      
      {/* Text + Button Frame */}
        <div className="w-[171px] h-[69.79px] flex flex-col gap-[8px] opacity-100">
          {/* Text Block */}
          <div className="w-[171px] h-[39px] flex flex-col gap-[4px]">
            <p className="font-inter font-semibold text-[13px] leading-[12.29px] tracking-[0]">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-[10px] leading-[140%] text-gray-700">
              Lorem ipsum dolor sit amet consectetur.
              Mattis interdum lectus proin adipiscing quis eu.
            </p>
          </div>

          {/* Button */}
          <button
            className="w-[80.39px] h-[22.79px] opacity-100 rotate-0 px-2 py-1 bg-orange-500 text-white font-bold text-[8px] leading-[140%] tracking-[-0.25px] rounded flex items-center justify-center"
          >
            Add To Cart
          </button>
      </div>
     </div>

    </div>



  );
};


export default JollofRiceSection;