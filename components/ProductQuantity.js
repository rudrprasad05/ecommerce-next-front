import React, { useContext, useEffect, useState } from 'react'
import { 
    HiOutlineMinusCircle, 
    HiOutlinePlusCircle 

} from 'react-icons/hi'
import { CartContext } from './CartContext'


const ProductQuantity = ({product}) => {

    const {cartProducts, removeCart, addCart} = useContext(CartContext)
    const [buttonDisabled, setButtonDisabled] = useState(cartProducts.filter(id => id == product._id).length > 0 ? false : true)

   


    const add = () => {
        addCart(product._id)
        setButtonDisabled(false)


    }

    const minus = () => {
        if((cartProducts.filter(id => id == product._id).length) - 1 == 0){
            setButtonDisabled(true)
        }
        removeCart(product._id)
    }

    return (
        <div className='flex gap-2 items-center justify-center'>
            <div>
                {cartProducts.filter(id => id == product._id).length}
            </div>
            <div className='flex flex-col'>
                <button onClick={add}>
                    <HiOutlinePlusCircle 
                    size={25} 
                    strokeWidth={1}
                    className={"stroke-green-500"}/>
                </button>
                <button onClick={minus} disabled={buttonDisabled}>
                    <HiOutlineMinusCircle 
                    size={25} 
                    strokeWidth={1} 
                    className={`${buttonDisabled ? "stroke-red-200" : "stroke-red-500"}`}/>
                </button>
            </div>
        </div>
    )
}

export default ProductQuantity