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
            <h1 className="text-2xl font-bold">Categories</h1>
            <ul className="list-disc pl-5">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
