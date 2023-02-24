import React from "react";
import Mainlayout from "../components/bloglayout/Mainlayout";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

function BlogItaly() {
  return (
    <Mainlayout>
      <div>
        <div className="flex justify-between p-5">
          <h1>ExpatDeals</h1>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <h1 className="text-center pb-8">Living and Working in Italy</h1>
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
            corrupti magni. Molestias repellat minima totam ut, dolores
            blanditiis incidunt unde ab vero enim nihil dicta labore sapiente
            vitae quas ex?
          </p>
          <h2 className="p-8">Tips for Socializing</h2>
          <p className="px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            corrupti magni. Molestias repellat minima totam ut, dolores
            blanditiis incidunt unde ab vero enim nihil dicta labore sapiente
            vitae quas ex?
          </p>
          <h2 className="p-8">Places to Visit</h2>
          <p className="px-8 pb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            corrupti magni. Molestias repellat minima totam ut, dolores
            blanditiis incidunt unde ab vero enim nihil dicta labore sapiente
            vitae quas ex?
          </p>
        </div>
        <div className="grid grid-rows-none md:grid-cols-5 pt-8 pb-16 pl-8 pr-8 gap-2 md:gap-4">
          <img
            className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
            src="https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/161907/venice-grand-canal-water-boats-161907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1731834/pexels-photo-1731834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/5563009/pexels-photo-5563009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
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
    </Mainlayout>
  );
}

export default BlogItaly;
