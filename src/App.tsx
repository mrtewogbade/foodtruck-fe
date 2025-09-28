
import Homepage from "./components/HomePage/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMenu from "./components/CategoryPage/Category";
import Payment from "./components/Payment";
import Category from "./components/CategoryPage/Category";
import RestaurantForm from "./components/CreateRestaurant/CreateRestaurant";
import CreateFood from "./components/CreateFood/CreateFood";
import Signup from "./components/Signup/Signup";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import Login from "./components/login/login";




export default function App() {
  return (
    <BrowserRouter>
      
          
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchMenu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/category" element={<Category />} />
          <Route path="/createfood" element=
          {<CreateFood />} />
          <Route path="/createrestaurant" element={<RestaurantForm/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          



        </Routes>
      
    </BrowserRouter>
  );
}