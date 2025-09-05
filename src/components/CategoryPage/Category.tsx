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

              <div>
                <img src={fries} alt="Fries" />
                <img src={grilled} alt="Grilled" />
                <img src={rice} alt="Rice" />
               

              </div>

              <div>



              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
