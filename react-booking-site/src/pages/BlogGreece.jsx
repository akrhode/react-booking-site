import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const BlogGreece = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <h1>ExpatDeals</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div>
        <h1 className="text-center pb-8">Living and Working in Greece</h1>
      </div>
      <div>
        <h2 className="p-8">Work Culture</h2>
        <p className="px-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          impedit itaque dolore cum? Consequatur, molestiae! Eos ratione illum
          ex quisquam natus delectus repellat itaque? Deleniti vel in maxime
          nisi eaque.
        </p>
        <h2 className="p-8">Food Culture</h2>
        <p className="px-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          corrupti magni. Molestias repellat minima totam ut, dolores blanditiis
          incidunt unde ab vero enim nihil dicta labore sapiente vitae quas ex?
        </p>
        <h2 className="p-8">Tips for Socializing</h2>
        <p className="px-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          corrupti magni. Molestias repellat minima totam ut, dolores blanditiis
          incidunt unde ab vero enim nihil dicta labore sapiente vitae quas ex?
        </p>
        <h2 className="p-8">Places to Visit</h2>
        <p className="px-8 pb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          corrupti magni. Molestias repellat minima totam ut, dolores blanditiis
          incidunt unde ab vero enim nihil dicta labore sapiente vitae quas ex?
        </p>
      </div>
      <div className="grid grid-rows-none md:grid-cols-5 pt-8 pb-16 pl-8 pr-8 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src="https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beach in Greece"
        />

        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Greek tavern"
        />

        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Santorini in Greece"
        />

        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Greek house"
        />

        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3732499/pexels-photo-3732499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Greek coastline"
        />
      </div>
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-[1240px] mx-auto flex flex-col px-2">
          <div className="sm:flex text-center justify-between items-center">
            <h1 className="pl-3">ExpatDeals</h1>
            <div className="flex justify-between w-full sm:max-w-[280px] my-4 pl-4 pr-4">
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
    </div>
  );
};

export default BlogGreece;
