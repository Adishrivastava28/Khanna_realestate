import React from 'react'
import img from "../../tt.jpg"

import ScrollButtons from "./ScrollButton";
import Sections from './Sections';
const Philosophy = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen">
      <img className="object-cover w-full h-full" src={img} alt="Full screen" />
      <div className="-mt-20  sm:-mt-28 md:absolute md:bottom-0 md:left-0 md:right-0 bg-black bg-opacity-50 text-white text-center p-4">
        <p className=" md:text-lg sm:text-sm  text-[8px] md:px-20 md:pb-6">
          <div>PHILOSOPHY At SOBHA</div>, we have always strived for benchmark
          quality, customer centric approach, robust engineering, in-house
          research, uncompromising business ethics, timeless values and
          transparency in all spheres of business conduct. This has helped us in
          becoming the most preferred real estate brand in India.
        </p>
      </div>
     
    </div>
  );
}

export default Philosophy
