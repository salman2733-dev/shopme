import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import {Link} from 'react-router-dom'
import image1 from "../Accets/Shopping.jpg";
import image3 from "../Accets/Women.jpg";
import image2 from "../Accets/Mens.jpg";

// Image List
const Imagelist = [
  {
    id: 1,
    img: image1,
    title: "70% off on all sale's product offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: image2,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: image3,
    title: "Upto 50% off on all Women's wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Main = ({ Handelorderpopup }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Imagelist.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-[#c2cff5] dark:bg-gray-900">
      {/* <div className="relative overflow-hidden w-full bg-[#c2cff5]"> */}
      <div className="relative overflow-hidden w-full bg-[#c2cff5] dark:bg-gray-900">
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          {Imagelist.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 flex flex-col md:flex-row items-center transition-transform duration-700 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 text-center md:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-6xl font-bold text-black dark:text-white leading-tight mb-4 md:mb-6"
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg"
                >
                  {item.description}
                </motion.p>

                <Link to="/shop">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-blue-700 hover:bg-blue-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-md w-40 md:w-48 text-lg"
  >
    Shop Now
  </motion.button>
</Link>
              </div>

              {/* Right Side - Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden flex justify-center md:justify-end">
                <div className="absolute inset-0 bg-[#a0b3f8] transform -skew-x-12 -translate-x-1/3 hidden md:block"></div>
                <div className="absolute inset-0 bg-[#8da4f7] transform skew-x-12 translate-x-1/2 hidden md:block"></div>

                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  src={item.img}
                  alt={item.title}
                  className="h-[250px] md:h-[450px] w-auto object-cover rounded-lg z-10"
                />
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
            {Imagelist.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                  index === currentSlide ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
