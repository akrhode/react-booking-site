import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
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
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          ExpatDeals
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link
            className="no-underline hover:underline underline-offset-8"
            to="countries"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Countries
          </Link>
        </li>
        <li>
          <Link
            className="no-underline hover:underline underline-offset-8"
            to="destinations"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            className="no-underline hover:underline underline-offset-8"
            to="booking"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Book
          </Link>
        </li>
        <li>
          <Link
            className="no-underline hover:underline underline-offset-8"
            to="views"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Views
          </Link>
        </li>
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
            ? "absolute left-0 top-0 w-full bg-gray-100/90 text-black px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>ExpatDeals</h1>
          <li className="border-b">Countries</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Book</li>
          <li className="border-b">Views</li>
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
