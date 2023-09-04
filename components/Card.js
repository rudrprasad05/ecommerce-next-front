import React from 'react'

import { HiOutlineShoppingCart } from 'react-icons/hi'

const Card = ({product}) => {
    const desc = product.description.split(' ').slice(0,10);
    
  return (
    <div className='h-full flex flex-col text-center border rounded-md overflow-clip shadow-md'>
        <div className='w-full h-1/2 overflow-clip'>
            <img src={product.imgSrc} alt={product.title} className='w-full object-cover h-full'/>
        </div>
        <div className='text-xl capitalize font-bold my-auto px-5'>
            {product.title}
        </div>
        <div className='text-base my-auto px-5'>
            {desc.map(e => <span> {e}</span>)}
            {product.description.length > 50 ? 
                <span> ...</span> : <span></span>
            }
        </div>
        <div className='text-lg  my-auto px-5'>
            ${product.price}
        </div>
        <div className='flex gap-2 items-center justify-center w-full bg-blue-500 text-white py-2 px-5 text-center mt-auto'>
            <span>Add to Cart</span>
            <span>
                <HiOutlineShoppingCart/>
            </span>
        </div>
    </div>
  )
}

export default Card