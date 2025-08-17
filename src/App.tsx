import Navbar from "./components/NavBar/Navbar"
import Homepage from "./components/HomePage/Homepage";
import SideBar from "./components/SideBar/SideBar";

function App() {

  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Homepage />
      </div>
    </>
  )
}

export default App