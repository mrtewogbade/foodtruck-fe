import Homepage from "./components/HomePage/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMenu from "./components/CategoryPage/Category";
import Payment from "./components/Payment";
import Category from "./components/CategoryPage/Category";
import Signup  from "./components/Signup/Signup";
import Login from "./components/login/login";



import Description from "./components/DescriptionPage/Description"
import Checkout from "./components/CheckoutPage/Checkout";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ConfirmPassword from "./components/ConfirmPassword/ConfirmPassword";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
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
