import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './components/HomePage/Homepage';
import Signup from './components/Signup/Signup';

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
          
        </Routes>
      
    </BrowserRouter>
  );
}   

export default App;