import React from 'react'

import { Search } from 'lucide-react'
import { Bell } from 'lucide-react'

function SearchDishes() {
  return (
    <div className="w-[1169px] h-[68px] flex items-center justify-between border-2 border-gray-600 rounded-lg px-4">
      <div className="w-[390px] h-[48px] flex items-center border border-gray-500 px-4 rounded-lg">
        <Search className="text-gray-500 w-5 h-5 mr-2" />
        <p>Search for Restaurants, dishes</p>
      </div>
      <div className="w-[234px] h-[40px] flex items-center justify-center border border-gray-500 px-4 rounded-lg">
        <Bell className="text-gray-500 w-5 h-5" />
      </div>
    </div>
  );
}


export default SearchDishes