import React from 'react'
import ButtonLink from './ButtonLink'
import PrimaryButton from './PrimaryButton'

const Featured = ({product}) => {
  return (
    <>
      <div className='h-50v bg-gray-400 grid items-center'>
        <div className='w-4/5 mx-auto flex justify-between items-center gap-10 h-40v my-auto '>

          <div className='flex flex-col justify-around h-full'>
            <div className='text-5xl'>
              {product.title}
            </div>
            <div className='text-xl'>
              {product.description}
            </div>
            <div className='flex gap-5'>
              <ButtonLink link={'/products/'+product._id}>More Info</ButtonLink>
              <PrimaryButton type={"cart"}/>
            </div>
            
          </div>

          <div className='h-40v'>
            <img src={product.imgSrc} alt={product.description} className='h-full'/>
          </div>


        </div>
        

      </div>
    </>
  )
}

export default Featured