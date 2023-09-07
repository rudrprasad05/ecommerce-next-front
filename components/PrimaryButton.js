import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'

import ButtonLink from './ButtonLink'

export const primaryButtonStyling = "rounded-lg bg-primary capitalize shadow-md px-5 py-2"


const PrimaryButton = ({text, type, link}) => {

    if (type === 'primary'){
        return (
            <>

                <button className={primaryButtonStyling}>
                    {text}
                </button>
            </>
          )
    }
    else if (type === 'primary' && link){
        return (
            <>
                <ButtonLink link={link}>

                    <button className='rounded-lg bg-gray-500 shadow-md px-5 py-2'>
                        {text}
                    </button>

                </ButtonLink>
                
            </>
          )
    }
    else if(type === 'cart'){
        return (
            <>
                <button className={`${primaryButtonStyling} flex gap-2 items-center`}>
                    <HiOutlineShoppingCart/>
                    <span>Add to Cart</span>
                </button>
            </>
          )
    }

    else{
        return(
            <>
                <button className='rounded-lg bg-blue-500 shadow-md px-5 py-2'>
                    TYPE NOT SPECIFIED
                </button>
            </>
        )
    }
  
}

export default PrimaryButton