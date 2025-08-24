import pizzaImage from '../assets/pizza.png';
import riceImage from '../assets/rice.jpg';
import chickenImage from '../assets/chicken.jpg';
import grilledMeatImage from '../assets/grilled-meat.jpg';

const renderCategories = () => {
  return (
    <>
      <div className="relative w-[105.43px] h-[101.55px] rounded-[15.5px] border-[1.55px] border-[#F2994A] bg-white overflow-hidden">
        <img
          src={pizzaImage}
          alt="Pizza"
          className="absolute top-[-6px] left-[-5px] w-[115px] h-[93px] rotate-[0deg] opacity-100 object-cover"
        />
        <p className="absolute bottom-[4px] left-1/2 transform -translate-x-1/2 text-[12px] text-[#828282]">
          Pizza
        </p>
      </div>

      <div className="relative w-[105.43px] h-[101.55px] rounded-[15.5px] border-[1.55px] border-[#F2994A] bg-white overflow-hidden">
        <img
          src={riceImage}
          alt="Rice"
          className="absolute top-[-6px] left-[-5px] w-[115px] h-[93px] rotate-[0deg] opacity-100 object-cover"
        />
        <p className="absolute bottom-[4px] left-1/2 transform -translate-x-1/2 text-[12px] text-[#828282]">
          Rice
        </p>
      </div>

      <div className="relative w-[105.43px] h-[101.55px] rounded-[15.5px] border-[1.55px] border-[#F2994A] bg-white overflow-hidden">
        <img
          src={chickenImage}
          alt="Chicken"
          className="absolute top-[-6px] left-[-5px] w-[115px] h-[93px] rotate-[0deg] opacity-100 object-cover"
        />
        <p className="absolute bottom-[4px] left-1/2 transform -translate-x-1/2 text-[12px] text-[#828282]">
          Chicken
        </p>
      </div>

      <div className="relative w-[105.43px] h-[101.55px] rounded-[15.5px] border-[1.55px] border-[#F2994A] bg-white overflow-hidden">
        <img
          src={grilledMeatImage}
          alt="Grilled Meat"
          className="absolute top-[-6px] left-[-5px] w-[115px] h-[93px] rotate-[0deg] opacity-100 object-cover"
        />
        <p className="absolute bottom-[4px] left-1/2 transform -translate-x-1/2 text-[12px] text-[#828282]">
          Grilled Meat
        </p>
      </div>
    </>
  );
};

export default renderCategories;