import React, { useContext } from 'react';
import Item from './Item';
import { UserContext } from '../UserContext/UserContext';

const Product = () => {
  const { products, loading } = useContext(UserContext);
  

  return (
    <div className='flex flex-wrap w-full gap-8 p-10'>
      
      {loading ? (
        <div className='flex justify-center w-full'>
       
          <div className='w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin'></div>
        </div>
      ) : products.length > 0 ? (
        products.map((item, index) => <Item item={item} key={index} />)
      ) : (
        <div className='flex justify-center w-full'>
          <h2 className='text-3xl font-bold text-black'>No Products!</h2>
        </div>
      )}
    </div>
  );
};

export default Product;
