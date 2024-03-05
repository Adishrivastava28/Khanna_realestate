import React from 'react'
import a from "./leader.jpg";
import Scroll from "./Scroll";
const First = () => {
  return (
    
      <div className=" flex flex-col items-center justify-center md:h-screen">
        <img className="object-cover w-full h-full" src={a} alt="Full screen" />
        <div className="-mt-20  sm:-mt-28 md:absolute md:bottom-0 md:left-0 md:right-0 bg-black bg-opacity-50 text-white text-center p-4">
          <p className=" md:text-lg sm:text-sm  text-[8px] md:px-20 md:pb-6">
            <div>LEADERSHIP </div>The diversified portfolio of SOBHA is
            well-supported by a visionary leadership team which not only sets a
            compelling vision but is also responsible for operative management
            of the business.
          </p>
        </div>
      </div>
    
  );
}

export default First
