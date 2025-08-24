import PepperBowl from '../assets/pepper-bowl.png';
import Tray from '../assets/tray.png';
import MeatChicken from '../assets/meat-chicken.png';


const JollofRiceSection = () => {
  return (
    <>
      <div>
       <div className="w-[1101px] h-[657.32px] bg-white shadow-[0px_2.95px_7. 87px_#00000029] p-4 flex flex-col gap-[16px]">
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
            <p className="text-[10px] leading-[140%] text-gray-700">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-[10px] leading-[140%] text-gray-700">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="text-[10px] leading-[140%] text-gray-700">
              Mattis interdum lectus proin adipiscing quis eu.
            </p>
          </div>

          {/* Button */}
          <button
            className="w-[80.39px] h-[22.79px] bg-orange-500 text-white font-bold text-[8px] leading-[140%] tracking-[-0.25px] rounded flex items-center justify-center"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="w-[1101px] h-[657.32px] bg-white shadow-[0px_2.95px_7.87px_#00000029] p-4 flex flex-col gap-[16px]">
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
            <p className="text-[10px] leading-[140%] text-gray-700">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-[10px] leading-[140%] text-gray-700">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="text-[10px] leading-[140%] text-gray-700">
              Mattis interdum lectus proin adipiscing quis eu.
            </p>
          </div>

          {/* Button */}
          <button
            className="w-[80.39px] h-[22.79px] bg-orange-500 text-white font-bold text-[8px] leading-[140%] tracking-[-0.25px] rounded flex items-center justify-center"
          >
            Add To Cart
          </button>
        </div>
      </div>
     </div>
    
     <div className="w-[1101px] h-[657.32px] bg-white shadow-[0px_2.95px_7.87px_#00000029] p-4 flex flex-col gap-[16px]">
      {/* Image */}
      <img
        src={MeatChicken}
        alt="Meat Chicken"
        className="w-[168.14px] h-[96.36px] rounded-[9.83px] opacity-100"
      />

      
      <div className="w-[171px] h-[69.79px] flex flex-col gap-[8px] opacity-100">
        {/* Text Block */}
        <div className="w-[171px] h-[39px] flex flex-col gap-[4px]">
          <p className="text-[10px] leading-[140%] text-gray-700">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-[10px] leading-[140%] text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="text-[10px] leading-[140%] text-gray-700">
            Mattis interdum lectus proin adipiscing quis eu.
          </p>
        </div>

        {/* Button */}
        <button
          className="w-[80.39px] h-[22.79px] bg-orange-500 text-white font-bold text-[8px] leading-[140%] tracking-[-0.25px] rounded flex items-center justify-center"
        >
          Add To Cart
        </button>
      </div>
     </div>

    </>



  );
};


export default JollofRiceSection;