import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Book = () => {
  return (
    <div className="max-w-[1240] mx-auto grid lg:grid-cols-3 gap-4 px-8 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="pb-8">BOOK EXCLUSIVE ACCOMODATIONS</h2>
          <p2 className="py-4 pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nesciunt minus impedit, quis odit cum corrupti eum quos ullam
            quisquam. Ullam aliquam nemo id eum impedit repudiandae quibusdam
            explicabo magni. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi ea eum repudiandae tenetur culpa recusandae consectetur
            dolores cupiditate facilis nihil, eos quis illum non aut distinctio,
            temporibus magnam iure impedit. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolor, veniam? Ipsam odit impedit
            facere? Atque aut non provident illum consequuntur beatae
            repudiandae ad aspernatur saepe repellendus optio sed, laboriosam
            animi. Dolor, veniam? Ipsam odit impedit facere? Atque aut non
            provident illum consequuntur beatae repudiandae ad aspernatur saepe
            repellendus optio sed, laboriosam animi.
          </p2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center gap-4">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">GREAT CUSTOMER SERVICE </h3>
              <p className="py-1">Call us: +00 0000 000 00</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center gap-4">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">FAST SEARCH ASSISTANCE </h3>
              <p className="py-1">High-quality service for 20 years</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">LIMITED OFFER</p>
          <p className="py-4">GET AN ADDITIONAL 10% OFF</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Select</option>
              <option>Greece - Athens</option>
              <option>Greece - Thessaloniki</option>
              <option>Italy - Florence</option>
              <option>Italy - Rome</option>
              <option>Portugal - Lisboa</option>
              <option>Portugal - Porto</option>
              <option>Spain - Madrid</option>
              <option>Spain - Barcelona</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="button-book w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Book;
