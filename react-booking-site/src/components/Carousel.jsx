import React, { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.pexels.com/photos/2648989/pexels-photo-2648989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/208722/pexels-photo-208722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="mx-auto py-24 px-8">
      <div id="views" className="text-center">
        <h1>Views</h1>
      </div>
      <div className="max-w-[700px] mx-auto px-4 py-8 relative flex justify-center items-center">
        <BsArrowLeftSquareFill
          onClick={prevSlide}
          className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
        />
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
        />
        {sliderData.map((item, index) => (
          <div className={index === slide ? "opacity-100" : "opacity-0"}>
            {index === slide && (
              <img className="w-full rounded-md" src={item.url} alt=""></img>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
