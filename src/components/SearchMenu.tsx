import React from 'react';


import renderCategories from './RenderCategories';
import JollofRiceSection from './JollofRiceSection';

const SearchMenu = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Category Section */}
      <h2 className="text-2xl font-bold mb-4">Category</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {renderCategories()}
      </div>

      {/* Jollof Rice Section */}
      <h2 className="text-2xl font-bold mb-4 mt-10">Jollof Rice</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {JollofRiceSection()}
      </div>
    </div>
  );
};

export default SearchMenu;