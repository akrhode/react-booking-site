import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu, HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          NomadHomes
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Book</li>
        <li>Countries</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-4" size={20} />
        <BsPerson className="mr-2" size={20} />
      </div>
      {/*Hamburger Icon*/}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/*Mobile Dropdown Menu*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>NomadHomes</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Book</li>
          <li className="border-b">Countries</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaInstagram className="icon" />
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
