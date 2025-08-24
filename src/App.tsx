import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Homepage from './components/HomePage/Homepage';
import Signup from './components/Signup/Signup';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;