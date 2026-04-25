import React from "react";
import Image1 from "../Accets/one.jpg";
import Image2 from "../Accets/two.jpg";
import { Link } from "react-router-dom";
import Image3 from "../Accets/three.jpg";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductData = [
  {
    id: 1,
    img: Image1,
    title: "Jacob Black",
    desc: "m dolor sit amet consectetur, adipisicing elit. Ipsa consectetur, at adipisci provident eos laudantium sunt velit  ducimus quia dolorum aliquam fugit doloribus.",
  },
  {
    id: 2,
    img: Image2,
    title: "Casual wear",
    desc: "m dolor sit amet consectetur, adipisicing elit. Ipsa consectetur, at adipisci provident eos laudantium sunt velit  ducimus quia dolorum aliquam fugit doloribus.",
  },
  {
    id: 3,
    img: Image3,
    title: "Smart Look",
    desc: "m dolor sit amet consectetur, adipisicing elit. Ipsa consectetur, at adipisci provident eos laudantium sunt velit  ducimus quia dolorum aliquam fugit doloribus.",
  },
];

const Item = ({ handleOrderPopup }) => {
  return (
    <div className="container">
      <div className="text-left">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-center">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          facilis aut ratione quae voluptate! Laudantium mollitia earum
          provident facilis!
        </p>

        <div className="mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                className="rounded-2xl text-center bg-white dark:bg-slate-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 max-w-[300px] h-[450px]"
              >
                <div>
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[280px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                <div className="flex items-center justify-center gap-1 flex-col">
                  <div className="flex">
                    <StarIcon className="text-yellow-500 w-4" />
                    <StarIcon className="text-yellow-500 w-4" />
                    <StarIcon className="text-yellow-500 w-4" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.desc}
                  </p>
                 <Link to="/shop">
  <button
    className="bg-primary hover:scale-105 duration-300 text-blue-500 border px-4 rounded-full mt-4 group-hover:bg-white py-1 group-hover:text-primary hover:bg-white"
  >
    Order Now
  </button>
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Let's Start Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Let's Start Shopping!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Explore our best offers and find the perfect product for you.
          </p>
          <Link to="/shop">
          <button
            onClick={handleOrderPopup}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg duration-300"
          >
            Start Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
