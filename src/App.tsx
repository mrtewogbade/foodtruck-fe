import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Homepage from './components/HomePage/Homepage';
import Signup from './components/Signup/Signup';
import SearchMenu from './components/SearchMenu';


function App() {
  return (
    <BrowserRouter>
      
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchMenu />} />
        </Routes>
      
    </BrowserRouter>
  );
}   

export default App;