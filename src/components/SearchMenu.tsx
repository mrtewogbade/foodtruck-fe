import React from 'react';


import renderCategories from './RenderCategories';
import JollofRiceSection from './JollofRiceSection';
import SideBar from './SideBar/SideBar';
import SearchDishes from './SearchDishes';

const CategoryPage = () => {
    return (
        <div className="p-6 bg-gray-100 w-[1270px] h-screen flex-col">
          <div className='w-[1169px] h-[68px] flex-col border-b-gray-600'>
            {SearchDishes()}
          </div>
          
          
         {/* Category Section */}
         <h2 className="text-2xl font-bold mb-4">Category</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {renderCategories()}
          </div>

          {/* Jollof Rice Section */}
          <h2 className="text-2xl font-bold mb-4 mt-10">Jollof Rice</h2>
          <div className="flex flex-row-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {JollofRiceSection()}
          </div> *
        </div>
    );
}


const SearchMenu = () => {
  return (
    <div className='flex-col-3/7 w-full h-screen flex'>
      <SideBar />
      <CategoryPage />
    </div>
  );
};

export default SearchMenu;