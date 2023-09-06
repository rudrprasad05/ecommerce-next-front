import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import ProductQuantity from './ProductQuantity'

const CardProduct = ({product}) => {
    const {cartProducts, removeCart, addCart} = useContext(CartContext)

    

  return (
    <>
        <div className='flex gap-10 items-center my-2 border shadow-md bg-blue-50'>
            <div className='w-1/4 h-32'>
                <img className='w-full h-full object-cover' src={product.imgSrc} alt={product.description} />
            </div>
            <div className='px-5 py-2 grid grid-cols-3 items-center text-center grow'>
                <div className='text-left'>
                    {product.title}
                </div>
                <ProductQuantity product={product}/>
                <div>

                    {
                    cartProducts.filter(id => id == product._id).length * product.price
                    }
                </div>
            </div>
           
        </div>
    </>
  )
}

export default CardProduct