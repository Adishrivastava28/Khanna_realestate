import React from 'react'
import Navbar from '../Navbar';
import a from './leader.jpg'
import First from './First';
import Section from './Section'
const Leadership = () => {
  return (
    <div>
      <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="-mt-24">
        <First></First>
      </div>
      <div><Section></Section></div>
    </div>
  );
}

export default Leadership
