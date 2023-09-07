import { Button, Snackbar } from '@mui/base';
import { IconButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'

import { 
    HiOutlineShoppingCart,  
    HiOutlineStar,
    HiOutlineX
} from 'react-icons/hi'

import { CartContext } from './CartContext';

const Card = ({product}) => {
    const {cartProducts, addCart, removeCart} = useContext(CartContext)

    const desc = product.description.split('').slice(0,50);
    const [domloaded, setDomloaded] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)

    useEffect(() => {
        setDomloaded(true)
    }, [])

    
    return (
        <>
        
        {domloaded && (
            <div className='h-96 bg-gray-900 py-5 px-5 rounded-md shadow-md flex flex-col'>
                <div className='w-full h-1/2 overflow-clip '>
                    <img src={product.imgSrc} alt={product.title} className='w-full object-contain h-full'/>
                </div>
                <div className='text-xl text-primary my-3'>
                    {product.title}
                </div>
                <div className='text-base text-gray-400'>
                    {desc.map((e, index) => <span key={index}>{e}</span>)}
                    {product.description.length > 50 ? 
                        <span> ...</span> : <span></span>
                    }
                </div>
                <div className='mt-auto'>
                    <div className='flex items-center justify-between'>
                        <div className='text-xl text-secondary my-3'>
                            ${product.price}
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='flex gap-[2px] relative'>
                            {[1,2,3,4,5].map(() => (
                                <span className=''><HiOutlineStar className='stroke-fuchsia-300'/></span>
                            ))}
                                
                            </div>
                            <div className='text-secondary'>
                                5.0
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='border border-gray-400 text-gray-400 grow rounded-md px-3 py-1 hover:bg-gray-400 hover:text-background transition cursor-pointer'>
                            More Details
                        </div>
                        <div>
                        { cartProducts && !cartProducts.includes(product._id) && 
                            <button 
                                className='bg-primary w-8 h-full rounded-md '
                                onClick={() => {
                                    addCart(product._id)
                                    
                                }}
                                alt={'add to cart'}
                            >
                                <span>
                                    <HiOutlineShoppingCart className='m-auto stroke-white'/>
                                </span>
                            </button>
                        }
                            
                        { cartProducts && cartProducts.includes(product._id) &&
                            <button 
                            className='bg-rose-500 w-8 h-full rounded-md'
                            onClick={() => removeCart(product._id, true)}
                            alt={'remove from cart'}
                            >
                                <span>
                                    <HiOutlineX className='m-auto stroke-white'/>
                                </span>
                            </button>
                        }
                        </div>

                    </div>
                    
                </div>
                
            </div>
        )}

        </>
    )

}

export default Card






