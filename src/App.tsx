import Homepage from "./components/HomePage/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./components/Payment";
import Category from "./components/CategoryPage/Category";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/login";
import SearchDishes from "./components/SearchDishes";
import SearchMenu from "./components/SearchMenu";
import UserManagement from "./components/UserManagement";

import Description from "./components/DescriptionPage/Description"
import Checkout from "./components/CheckoutPage/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/searchdishes" element={<SearchDishes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/description" element={<Description />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/category" element={<Category />} />
          <Route path="/searchmenu" element={<SearchMenu />} />
          <Route path="/usermanagement" element={<UserManagement />} />


        </Routes>
      
    </BrowserRouter>
  );
}

export default App