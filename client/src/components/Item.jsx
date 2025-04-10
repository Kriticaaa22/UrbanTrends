import React, { useContext, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Item = ({ item, key }) => {
  const images = item.image.split(",");
  const { productId, setProductId } = useContext(UserContext);

  return (
    <div
      key={key}
      className="w-96 h-[32rem] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-150"
    >
      <div className="w-full h-[65%] cursor-pointer">
        <Link to={`/products/${item.id}`}>
          <img
            onClick={() => setProductId(item.id)}
            className="object-contain w-full h-full"
            src={`http://localhost:5000/${images[0]}`}
            alt="T-Shirt"
          />
        </Link>
      </div>

      <div className="p-4 text-[#555555] text-lg flex flex-col gap-2">
        <h3 className="font-semibold">De Casual{item.type}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>

      <div className="flex items-center px-4 text-2xl">
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <span className="pl-3 text-base text-gray-600">(8)</span>
      </div>

      <div className="flex items-center px-4 pt-4 text-3xl font-bold">
        <span>$</span>
        <p className="ml-1">{item.price}</p>
      </div>
    </div>
  );
};

export default Item;
