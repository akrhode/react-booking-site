import React from "react";
import Italy from "../assets/Italy.jpg";
import Greece from "../assets/Greece.jpg";
import Spain from "../assets/Spain.jpg";
import Portugal from "../assets/Portugal.jpg";
import Selects from "./Selects";
import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <div className="mx-auto py-16 px-8">
      <h1 id="countries" className="text-center">
        Countries
      </h1>
      <p className="text-center py-4">
        Learn More About Expat Life at Your Dream Destination
      </p>
      <div className="max-w-[1240] grid grid-rows-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-4 gap-2 md:gap-4 sm:gap-8">
        <Link to="/BlogGreece">
          <Selects bg={Greece} text="Greece" />
        </Link>
        <Link to="/BlogItaly">
          <Selects bg={Italy} text="Italy" />
        </Link>
        <Link to="/BlogSpain">
          <Selects bg={Spain} text="Spain" />
        </Link>
        <Link to="/BlogPortugal">
          <Selects bg={Portugal} text="Portugal" />
        </Link>
      </div>
    </div>
  );
};

export default Countries;
