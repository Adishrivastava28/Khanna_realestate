import React from "react";
import vid from "./assets/Hero.mp4";
import abtimg from "./assets/abtimg.jpg";

const Hero = ({ vidsrc }) => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="  inset-0 flex flex-col items-center justify-center">
        {/* Video element */}
        <video
          className="  object-cover opacity-100"
          autoPlay
          loop
          muted
        >
          <source src={vidsrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Hero;
