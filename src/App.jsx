import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SpaceAdv from "./components/SpaceAdventures";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#050816]" />

      <main className="flex min-h-screen flex-col">
        <Router basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spaceadv" element={<SpaceAdv />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
