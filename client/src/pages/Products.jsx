import React, { useState } from 'react'
import Filter from '../components/Filter'
import Product from '../components/Product'

const Products = () => {

  

  return (
    <div className='flex'>
        <Filter />
        <Product />
    </div>
  )
}

export default Products