import moment from 'moment'
import React from 'react'
import Card from './Card'

const NewProducts = ({product}) => {
  console.log(product.map((e) => moment(e.updatedAt).format("Do MMM YYYY")))
  return (

    <>
      <div className='grid md:grid-cols-4 grid-cols-3 w-4/5 mx-auto gap-10 my-10'>
        {product && product.map((item) => {
          return(
            <Card product={item}/>
          )
        })}
      </div>
        
    </>
  )
}

export default NewProducts