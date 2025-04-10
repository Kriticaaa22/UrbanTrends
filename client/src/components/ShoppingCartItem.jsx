import React, { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import axios from "axios"
import { UserContext } from "../UserContext/UserContext";

const ShoppingCartItem = ({ item, index }) => {

  const {user} = useContext(UserContext);
  
  const handleDelete = async(id)=>{
    
    
   try {
    const response = await axios.delete("http://localhost:5000/api/auth/deleteshoppingcart",{
      data:{
        shoppingCartId: id,
      user_id:user.id
      }
    })    
    if(response.status===200){
      window.location.reload();
    }
    
   } catch (error) {
    console.log(error);
    
   }

    
    
  }
  
  return (
    <div
      key={index}
      className="flex items-center justify-between pb-5 border-b"
    >
      <img
        className="object-cover w-16 h-16 rounded"
        src={`http://localhost:5000/${item.image.split(",")[0]}`}
        alt="Shirt"
      />
      <p className="text-xs sm:text-sm font-medium text-gray-700">{item.size}</p>
      <p className="text-xs sm:text-sm font-medium text-gray-700">{item.type}</p>
      <p className="text-xs sm:text-sm font-medium text-gray-700">{item.forWho}</p>
      <p className="text-xs sm:text-sm font-bold text-gray-900">${item.price}</p>
      <IoIosClose onClick={()=>handleDelete(item.id)} className="text-xl font-bold duration-100 ease-in-out cursor-pointer hover:text-blue-500" />
    </div>
  );
};

export default ShoppingCartItem;
