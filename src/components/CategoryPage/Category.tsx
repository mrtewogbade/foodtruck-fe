import { fries, grilled, rice } from "../../assets";
import SearchAndProfileBar from "../SearchAndProfileBar";
import SideBar from "../SideBar/SideBar";

export default function Category() {
  return (
    <div>
      <div className="flex flex-row">
        <SideBar />

        <div className="flex flex-col bg-gray-100 min-h-screen w-full">
          <div className=" w-full">
            <SearchAndProfileBar />
          </div>

          <div>
            <div>
              <h1>Category</h1>

              {/** Food Items in the sub category **/}

              <div className="flex flex-wrap items-center  gap-4 p-4 ">
                <img className="w-20 h-20" src={fries} alt="Fries" />
                <img className="w-20 h-20" src={grilled} alt="Grilled" />
                <img className="w-20 h-20" src={rice} alt="Rice" />
              </div>

              <div>

                <h1>Sub Category</h1>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
