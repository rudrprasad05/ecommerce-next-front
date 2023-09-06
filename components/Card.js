import React, { useContext, useEffect, useState } from 'react'

import { HiOutlineShoppingCart } from 'react-icons/hi'
import { CartContext } from './CartContext';

const Card = ({product}) => {
    const {cartProducts, addCart, removeCart} = useContext(CartContext)

    const desc = product.description.split(' ').slice(0,10);
    const [domloaded, setDomloaded] = useState(false)

    useEffect(() => {
        setDomloaded(true)
    }, [])

    
    return (
        <>
        
        {domloaded && (<div 
            className='h-full flex flex-col text-center border rounded-md overflow-clip shadow-md'
            key={product._id}
        >
            <div className='w-full h-1/2 overflow-clip'>
                <img src={product.imgSrc} alt={product.title} className='w-full object-cover h-full'/>
            </div>
            <div className='text-xl capitalize font-bold my-auto px-5'>
                {product.title}
            </div>
            <div className='text-base my-auto px-5'>
                {desc.map((e, index) => <span key={index}> {e}</span>)}
                {product.description.length > 50 ? 
                    <span> ...</span> : <span></span>
                }
            </div>
            <div className='text-lg  my-auto px-5'>
                ${product.price}
            </div>
            {cartProducts && !cartProducts.includes(product._id) && 
            <button 
                className='flex gap-2 items-center justify-center w-full bg-blue-500 text-white py-2 px-5 text-center mt-auto'
                onClick={() => addCart(product._id)}
            >
                <span>Add to Cart</span>
                <span>
                    <HiOutlineShoppingCart/>
                </span>
            </button>}
            { cartProducts && cartProducts.includes(product._id) &&
            <button 
            className='flex gap-2 items-center justify-center w-full bg-red-500 text-white py-2 px-5 text-center mt-auto'
            onClick={() => removeCart(product._id, true)}
            >
                <span>Remove from Cart</span>
                <span>
                    <HiOutlineShoppingCart/>
                </span>
            </button>
            }
        </div>)}

        </>
    )
}

export default Card