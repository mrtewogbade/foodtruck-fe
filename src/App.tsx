
import Homepage from "./components/HomePage/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMenu from "./components/SeachMenu/SearchMenu";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchMenu />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
