import { CartContext } from '@/components/CartContext'
import React, { useContext, useEffect, useState } from 'react'
import Nav from "@/components/Nav";
import { HiOutlineCash } from 'react-icons/hi'
import axios from 'axios';
import CardProduct from '@/components/CardProduct';
import Layout from '@/components/Layout';


const CartPage = () => {

  const inputStyle = `
  rounded-md border border-fuchsia-300 focus:outline-purple-500 px-3 py-1
  `
  const { cartProducts } = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [domLoaded, setDomLoaded] = useState(false);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")

  var total = 0
  for(const productId of cartProducts){
    const price = products.find(p => p._id == productId)?.price || 0
    total+=price

  }

  useEffect(() => {

    if(cartProducts?.length > 0){
      axios.post('/api/cart', {_id: cartProducts}).then(
        res => {
          setProducts(res.data)
        }
      )
    }
    
    setDomLoaded(true);


  }, [])
  

  return (
    
    <Layout>
      
      <div className='py-32'>

     

        <div className='flex w-4/5 mx-auto gap-10 text-white' >
          {cartProducts?.length > 0 && (
            <div className='w-3/4'>
              {products?.map((item, index) => <CardProduct key={index} product={item}/>)}
              <div className='flex px-5 rounded-md text-white border border-purple-500 shadow-md bg-gray-900 py-2'>
                <div className='mr-5'>
                  Quantity: {cartProducts.length} units
                </div>
                <div className="divider w-[1px] mr-5 bg-gray-200/50"></div>
                <div className=' mr-5'>
                  Total: $ {total} (FJD)
                </div>

              </div>
            </div> 
            )
          }
          
          {cartProducts?.length > 0 &&
            <form method='post' action={'/api/checkout'} className='px-5 py-5 grow h-min bg-gray-900 rounded-md border border-fuchsia-300 '>
              <h1 className='text-xl'>Order</h1>
              <div className='flex flex-col gap-2 my-3'>
                <input 
                  className={inputStyle} 
                  type="text" 
                  value={name}
                  name={"name"}
                  onChange={e => setName(e.target.value)}
                  placeholder='Name' />
                <input 
                  className={inputStyle} 
                  type="email"
                  value={email}
                  name={"email"}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Email' />
                <input 
                  className={inputStyle} 
                  type="text" 
                  name={"address"}
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder='Address' />
                <input 
                  className={inputStyle} 
                  type="text" 
                  name={"contact"}
                  value={contact}
                  onChange={e => setContact(e.target.value)}
                  placeholder='Contact' />
                <input 
                  type="hidden" 
                  value={cartProducts.join(',')}
                  name={"products"}/>
              </div>
              
              <button 
                type='submit'
                className='flex gap-2 items-center justify-center w-full mt-8 bg-fuchsia-300 text-black py-1 rounded-md  px-5 text-center mt-auto'
                
              >
                <span>CheckOut</span>
                <span>
                    <HiOutlineCash size={30} strokeWidth={1.2}/>
                </span>
              </button>

            </form>
          }

          {cartProducts?.length == 0 && 
            <div className='flex w-4/5 mx-auto gap-10'>
              No Products
            </div>
          }
        </div> 

      </div>
      
      {!domLoaded && (
        <div>
          no products
        </div>
      )}
    </Layout>
    
  )
}

export default CartPage