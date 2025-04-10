import React, { useContext, useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { TbSTurnRight } from "react-icons/tb";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import {useNavigate} from "react-router-dom"


const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [images, setImages] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const { user,getItemNumber } = useContext(UserContext);
  const [isAddedToFavorite,setIsAddedToFavorite] = useState(false);
  const navigate = useNavigate();
  

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setSingleProduct(response.data);
      console.log(response.data);
      
      
      
      
      setImages(response.data[0].image.split(","));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  const handleBuy = async () => {
    if (selectedSize === "") {
      console.log("select size!");
    } 
    else if(!user){
      navigate("/login");
    }
    else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/addproduct",
          {
            user_id: user.id,
            product_id: id,
            size:selectedSize,
            price:singleProduct[0].price
          }
        );
        if (response.status === 200) {
          toast.success("product added!");
          getItemNumber();
        } else {
          toast.error("error while adding product!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleFavorite = async(product_id)=>{
    try {
      const response = await axios.post("http://localhost:5000/api/auth/addtofavorites",{
        product_id,
        user_id:user.id
      })
      if(response.status === 200){
        toast.success("Product added to your favorites!")
      }
      else {
        toast.error("An unexpected error occurred!");
      }
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("This product is already in your favorites!");
      }
      
      
    }
    

    
  }
 
  return (
    <div className="w-full h-[170vh] flex justify-center">
      <div className="w-full h-full  flex shadow-xl">
        <div className="w-full  h-full p-5">
          <div className="w-full h-[45%] flex md:flex-row flex-col">
            <div className="w-full h-full ">
              {images[0] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[0]}`}
                  alt=""
                />
              )}
            </div>
            <div className="w-full h-full ">
              {images[1] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[1]}`}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="w-full h-[45%] flex md:flex-row flex-col">
            <div className="w-full h-full ">
              {images[2] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[2]}`}
                  alt=""
                />
              )}
            </div>
            <div className="w-full h-full ">
              {images[3] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[3]}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full p-10">
          <div className="flex text-xl md:text-3xl justify-between ">
            <h3>
              De Casual Slim {singleProduct[0]?.type} <span>{singleProduct[0]?.forWho}</span>{" "}
            </h3>
            <div className="text-4xl flex flex-col items-center gap-3">
              <span className=" text-xs md:text-sm">Add to Favorites</span>
              <FaHeart onClick={()=>handleFavorite(singleProduct[0].id)}  className="text-red-700 cursor-pointer hover:scale-95 ease-in-out duration-100" />
            </div>
          </div>
          <div className="pt-10 ">
            <div className="flex flex-col md:flex-row items-center text-xl  md:text-2xl">
              <div className="flex">
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              </div>
              <div className="text-sm flex gap-3">
                <span className="pl-3  text-gray-600"> | </span>
                <div className="flex text-lg gap-1 cursor-pointer font-semibold hover:text-blue-600 ease-in-out duration-100">
                  <span>25</span>
                  <span>rating</span>
                </div>
              </div>
            </div>
            <div className="pt-20 text-2xl md:text-3xl text-[#193DB0]">
              <h2>{singleProduct[0]?.price}$</h2>
            </div>
            <div className="pt-10 text-xl font-semibold">
              <h2>Size</h2>
              <div className="w-full h-auto pt-5 flex flex-col md:flex-row gap-3">
                {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleClick(size)}
                    className={`w-8 h-8 md:w-12 md:h-12 font-normal shadow-xl text-black hover:border-2 border-black ease-out duration-75 ${
                      selectedSize === size
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full h-auto pt-20">
              {selectedSize !== "" ? (
                <button
                  onClick={handleBuy}
                  className="w-full h-14 bg-blue-600 text-white text-xl rounded-sm font-semibold hover:bg-blue-500 ease-in-out duration-100 "
                >
                  Add To Shopping Cart
                </button>
              ) : (
                <button className="w-full h-14 bg-blue-600 text-white text-sm md:text-xl rounded-sm font-semibold  cursor-not-allowed ">
                  Add To Shopping Cart
                </button>
              )}
            </div>
            <div className="pt-16 text-xl">
              <h2>This item is shipped by De Suits dealers.</h2>
            </div>
            <div className="pt-10 flex text-xl items-center gap-3">
              <TbSTurnRight />
              <span>Return Within 120 Days</span>
            </div>

            <div className="pt-16 text-[#555555]">
              <h2 className="font-bold">Product Description</h2>
              <p>
                It stands out with its elasticated waist and adjustable
                drawstring design that provides a comfortable fit.
              </p>
            </div>

            <div className="pt-16 text-[#555555]">
              <h2 className="font-bold">Product Content and Features</h2>
              <p>
                It stands out with its elasticated waist and adjustable
                drawstring design that provides a comfortable fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
