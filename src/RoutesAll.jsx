import React from 'react'
import Navbar from './components/Navbar';
import Hero from './Hero';
import Abt from './components/Abt';
import Logoslider from './components/logoSlider/Logoslider';
import Loc from './components/location/Loc';
import Carousel from './Carousel';

const RoutesAll = () => {
  return (
    <div>
      <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
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
      <div>
        <Loc></Loc>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default RoutesAll
