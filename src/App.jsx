import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SpaceAdv from "./components/SpaceAdventures"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return <>
  {/* <div className="fixed -z-10 h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
  <div className="fixed -z-10 h-screen w-full  bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
   
  <main className="flex flex-col items-center">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/spaceadv" element={<SpaceAdv />} />
      </Routes>
    </Router>
    
  </main>
  </>
}
export default App;
