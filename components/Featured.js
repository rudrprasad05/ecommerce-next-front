import React from 'react'
import ButtonLink from './ButtonLink'
import PrimaryButton from './PrimaryButton'

const Featured = ({product}) => {
  return (
    <>
      <div className='bg-background grid items-center py-24 text-white'>
        <div className='w-4/5 mx-auto flex justify-between items-center gap-10 h-40v my-auto '>

          <div className='flex flex-col justify-around h-full'>
            <div className='text-6xl text-purple-500'>
              Featured Product
            </div>
            <div className='text-3xl text-fuchsia-300'>
              {product.title}
            </div>
            <div className='text-lg'>
              {product.description}
            </div>
            <div className='flex gap-5'>
              <ButtonLink link={'/products/'+product._id}>
                <PrimaryButton type={"primary"} text={"more info"}/>
              </ButtonLink>
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