
import Homepage from "./components/HomePage/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMenu from "./components/CategoryPage/Category";
import Payment from "./components/Payment";
import Category from "./components/CategoryPage/Category";




function App() {
  return (
    <BrowserRouter>
      
          
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchMenu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/category" element={<Category />} />

        </Routes>
      
    </BrowserRouter>
  );
}


export default App
