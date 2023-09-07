import moment from 'moment'
import React from 'react'
import Card from './Card'

const NewProducts = ({product}) => {

  return (

    <>
      <div className='bg-background'>

        <h1 className='text-primary text-5xl w-4/5 mx-auto'>New Stock</h1>

        <div className='bg-background w-4/5 mx-auto my-10 grid md:grid-cols-4 gap-10 grid-cols-1'>
          {product && product.map((item, index) => {
            return(
              <Card product={item} key={index}/>
            )
          })}
          {product && product.map((item, index) => {
            return(
              <Card product={item} key={index}/>
            )
          })}
        </div>

      </div>
      
        
    </>
  )
}

export default NewProducts