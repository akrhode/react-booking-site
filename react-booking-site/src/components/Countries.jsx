import React from "react";
import Italy from "../assets/Italy.jpg";
import Greece from "../assets/Greece.jpg";
import Spain from "../assets/Spain.jpg";
import Portugal from "../assets/Portugal.jpg";
import Selects from "./Selects";

const Countries = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4">
      <h1 className="text-center">Countries</h1>
      <p className="text-center py-4">
        Learn More About Your Dream Destination
      </p>
      <div className="grid grid-rows-1 md:grid-cols-4 py-4 gap-2 md:gap-4 	">
        <Selects bg={Greece} text="Greece" />
        <Selects bg={Italy} text="Italy" />
        <Selects bg={Spain} text="Spain" />
        <Selects bg={Portugal} text="Portugal" />
      </div>
    </div>
  );
};

export default Countries;
