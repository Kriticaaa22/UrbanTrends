import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Popular = () => {
  const scrollRef = useRef(null);

  const scrollDistance = window.innerWidth >= 768 ? 268 : 172;

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-[50vh] flex items-center justify-center bg-gray-100">
      <div className="w-[80%] h-full relative mx-auto">
        <div className="text-center text-4xl pt-10 font-bold text-gray-800">
          <h2>Popular Categories</h2>
        </div>

        <div
          className="w-full h-72 mt-6 flex md:justify-start justify-center gap-3 overflow-hidden pt-2"
          ref={scrollRef}
        >
          <div className="flex flex-col md:flex-row gap-5 md:gap-4 whitespace-nowrap">
            {["Dress", "Jeans", "Pants", "Jackets", "Shirts", "Shorts"].map((item) => (
              <div
                key={item}
                className="w-36 h-20 md:w-64 md:h-32 bg-white hover:bg-gray-800 ease-in-out duration-200 cursor-pointer text-xl md:text-3xl font-light flex items-center justify-center border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <h2 className="text-gray-700 hover:text-white">{item}</h2>
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={scrollLeft}
          className="w-10 h-10 bg-black text-white flex items-center justify-center cursor-pointer hidden md:flex top-40 -left-5 absolute rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaArrowLeft />
        </div>
        <div
          onClick={scrollRight}
          className="w-10 h-10 bg-black text-white flex items-center justify-center cursor-pointer hidden md:flex top-40 -right-5 absolute rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Popular;
