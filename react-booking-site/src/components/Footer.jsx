import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-2">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="pl-3">ExpatDeals</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4 pr-4">
            <FaInstagram className="icon" />
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Impressum</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Countries</li>
            <li>Destinations</li>
            <li>Book</li>
            <li>Views</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
