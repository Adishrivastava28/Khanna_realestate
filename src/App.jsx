import React from "react";
import Hero from "./Hero";
import Contact from "./components/Contact-Us/Contact.jsx";
import Abt from "./components/Abt";
import Logoslider from "./components/logoSlider/Logoslider";
import Loc from "./components/location/Loc";
import Carousel from "./Carousel.jsx"
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Philosophy from "./components/Philosophy/Philosophy.jsx";
import Leadership from "./components/Leadership/Leadership.jsx";
import Sections from "./components/Philosophy/Sections.jsx";
import ScrollButtons from "./components/Philosophy/ScrollButton.jsx";
import RoutesAll from "./RoutesAll.jsx";
import FinalPhilosophy from "./components/Philosophy/FinalPhilosophy.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoutesAll></RoutesAll>}></Route>
        <Route path="/philosophy" element={<FinalPhilosophy></FinalPhilosophy>}></Route>
        <Route path="/contact" element={<Contact></Contact>} ></Route>
        <Route path="/team" element={<Leadership></Leadership>} ></Route>
        {/*   <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="-mt-24" id="hero">
        <Hero vidsrc="src\assets\Hero.mp4" />
      </div>
      <div id="aboutus">
        <Abt />
      </div>
      <div id="logoslider">
        <Logoslider />
      </div>
      <div><Loc></Loc></div>
      <div >
    <Carousel></Carousel>
      </div> */}
        {/*   <div>
        <Philosophy></Philosophy>
      </div>
      <div><Sections></Sections></div> */}
        {/* <Contact></Contact> */}
      </Routes>{" "}
    </Router>
  );
}

export default App;
