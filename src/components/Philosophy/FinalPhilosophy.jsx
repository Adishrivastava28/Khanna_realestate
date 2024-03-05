import React from 'react'
import Philosophy from './Philosophy'
import Sections from './Sections'
import Navbar from '../Navbar'
const FinalPhilosophy = () => {
  return (
    <div>
      <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className='-mt-24'>
        <Philosophy></Philosophy>
      </div>
      <div>
        <Sections></Sections>
      </div>
    </div>
  );
}

export default FinalPhilosophy
