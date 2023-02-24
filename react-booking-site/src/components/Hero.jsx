import React from "react";
import ocean from "../assets/ocean.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={ocean}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>The Best Deals for Expats</h1>
        <h2 className="p-4">First Class Accomodations in Europe</h2>
      </div>
    </div>
  );
};

export default Hero;
