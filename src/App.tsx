import Homepage from "./components/HomePage/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMenu from "./components/CategoryPage/Category";
import Payment from "./components/Payment";
import Signup from './components/Signup/Signup';
import Category from "./components/CategoryPage/Category";


import Description from "./components/DescriptionPage/Description"
import Checkout from "./components/CheckoutPage/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/description" element={<Description />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchMenu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/category" element={<Category />} />

        </Routes>
      
    </BrowserRouter>
  );
}


export default App
