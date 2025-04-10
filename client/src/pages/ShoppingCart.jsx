import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "../components/ShoppingCartItem";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios";

const ShoppingCart = () => {
  const { loading, user } = useContext(UserContext);
  const [shoppingcartItem, setShoppingcartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [image, setImage] = useState([]);

  const getShoppingCart = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/getshoppingcart",
        {
          params: {
            user_id: user?.id,
          },
        }
      );

      let total = 0;

      response.data.forEach((item) => {
        total += Number(item.price);
      });

      setShoppingcartItem(response.data);

      setTotalPrice(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getShoppingCart();
    }
  }, [loading, user]);

  return (
    <div className="flex justify-center w-full h-[120vh] bg-white">
      <div className="w-[90%] lg:w-[70%] h-full flex flex-col lg:flex-row gap-5 p-8 bg-white rounded-lg">
        {/* Left Side - Shopping Cart Details */}
        <div className="w-full lg:w-2/3">
          <div className="p-5 text-3xl font-bold border-b border-gray-300">
            <h2>Shopping Cart</h2>
          </div>

          <div className="flex gap-2 p-5 text-sm font-medium text-gray-600">
            {!user && (
              <>
                <p>Don't have an account?</p>
                <Link
                  className="text-blue-600 transition-colors hover:text-blue-800"
                  to={"/signup"}
                >
                  <strong>Signup</strong>
                </Link>{" "}
              </>
            )}
          </div>

          {/* Cart Items Header */}
          <div className="flex flex-col gap-2 p-5 pt-0">
            <div className="flex items-center justify-between font-semibold text-gray-700">
              <h3>{shoppingcartItem.length} items</h3>
              <Link
                to="/products"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Continue Shopping
              </Link>
            </div>
            <hr className="mt-2 border-t border-gray-300" />
          </div>

          {/* Cart Items List */}
          <div className="p-5 space-y-8">
            {shoppingcartItem.map((item, index) => (
              <ShoppingCartItem item={item} index={index} />
            ))}
          </div>
          <div className="flex justify-center w-full gap-5">
            <button className="w-12 h-8 font-semibold text-white duration-150 ease-in-out bg-blue-700 rounded-sm hover:bg-black ">
              Prev
            </button>
            <button className="w-12 h-8 font-semibold text-white duration-150 ease-in-out bg-blue-700 rounded-sm hover:bg-black">
              Next
            </button>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full p-6 bg-white rounded-lg lg:w-1/3">
          <h3 className="mb-4 text-xl font-bold text-gray-800">
            Order Summary
          </h3>
          <div className="flex justify-between gap-6 pt-12 text-gray-600">
            <p>Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between gap-6 mt-6 text-gray-600">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr className="my-4 mt-8" />
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <button className="w-full py-2 mt-6 text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
