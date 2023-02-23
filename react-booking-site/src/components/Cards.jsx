import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import data from "./Cardsdata.json";

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="Searchbar py-16 md:gap-4 sm:gap-8">
      <h1 className="text-center pb-8"> Destinations</h1>
      <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
        <div>
          <input
            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
            type="text"
            placeholder="Search Destinations"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <button>
          <AiOutlineSearch
            size={20}
            className="icon"
            style={{ color: "#ffffff" }}
          />
        </button>
      </form>
      <div className="Cardscontainer mx-auto py-16 px-8 grid grid-rows-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-4 sm:gap-8">
        {data
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="pb-10" key={val.id}>
                <img
                  className="w-full h-full object-cover"
                  src={val.image}
                  alt=""
                />
                <h3>{val.title}</h3>
                <p className="price">per week: ${val.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
