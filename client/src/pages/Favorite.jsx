import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios";
import FavoriteItem from "../components/FavoriteItem";

const Favorite = () => {
  const { user } = useContext(UserContext);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const getFavorites = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/getfavorites",
        {
          params: {
            user_id: user.id,
          },
        }
      );
      console.log(response.data);
      setFavoriteItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      getFavorites();
    }
  }, [user]);
    

  return (
    <div className="w-full h-[80vh] flex justify-center bg-gray-100">
      <div className="w-[80%] h-full flex flex-col items-center">
        <div className="pt-10 pb-5 text-3xl">
          <h2>Favorite Products</h2>
        </div>
       {
        favoriteItems.length>0 ?  <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {favoriteItems.map((item, index) => (
          <FavoriteItem item={item} index={index} />
        ))}
      </div> : <div className='flex flex-col items-center gap-7'>
            <div className='w-32 h-32 mt-16'>
                <img className='object-cover w-full h-full' src="https://www.lcw.com/Resource/Images/FavoriYok.svg" alt="" />
            </div>
            <div className='text-[#193DB0] text-xl font-semibold'>
                <h2>You Don't Have a Favorite Product</h2>
            </div>
            <div className='text-[#555555] text-xl font-semibold'>
                <p>You have not added a product to your favorites, all you have to do is click on the small heart icon on the product images.</p>
            </div>
            </div> 
       }
      </div>
    </div>
  );
};

export default Favorite;
