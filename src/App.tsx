import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import Signup from './components/Signup/Signup';
import SearchMenu from './components/SearchMenu';
import Payment from './components/Payment';
import Category from './components/CategoryPage/Category';


export default function App() {
  return (
    <BrowserRouter>
      
          
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/search" element={<SearchMenu />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="/category" element={<Category />} />
</Routes>

          
      
    </BrowserRouter>
  );
}