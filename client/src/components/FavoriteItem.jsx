import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../UserContext/UserContext'

const FavoriteItem = ({item,index}) => {

  const {user} = useContext(UserContext);


  const handleRemoveFavorite = async(id)=>{
    try {
      const response = await axios.delete("http://localhost:5000/api/products/removefavorite",{
        data:{
          user_id:user.id,
        id
        }
      })
      console.log(response.data);

      if(response.status===200){
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      
    }
    
  }
    
    
  return (
  
            <div key={index}
              className='overflow-hidden bg-white rounded-lg shadow-md'
            >
              <img
                src={`http://localhost:5000/${item.image.split(",")[0]}`}
                alt=""
                className='object-contain w-full h-64'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>{item.type}</h3>
                <p className='text-gray-600'>${item.price}</p>
                <button onClick={()=>handleRemoveFavorite(item.id)} className='w-full py-2 mt-4 text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600'>
                  Remove from Favorites
                </button>
              </div>
            </div>
       
  )
}

export default FavoriteItem