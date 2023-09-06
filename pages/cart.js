import { CartContext } from '@/components/CartContext'
import React, { useContext, useEffect, useState } from 'react'
import Nav from "@/components/Nav";
import { HiOutlineCash } from 'react-icons/hi'
import axios from 'axios';
import CardProduct from '@/components/CardProduct';
import PayPalCheckOutButton from '@/components/PayPalCheckOutButton';
import GooglePlay from '@/components/GooglePlay';
import AnotherGoogleButton from '@/components/AnotherGoogleButton';
import GooglePayButton from '@google-pay/button-react'



const CartPage = () => {

  const inputStyle = `
  rounded-md border border-blue-500 px-3 py-1
  `

  const { cartProducts } = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [domLoaded, setDomLoaded] = useState(false);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")

 

  // const [paypalInjected, setPaypalInjected] = useState(false)


  // const addPayPalScript = () => {
  //   if(window.paypal){
  //     setPaypalInjected(true)
  //     return
  //   }
  //   const script = document.createElement('script')
  //   script.src = "https://www.paypal.com/sdk/js?client-id=AXenEMAinPWURlkjUFyzIuYI1QMjjXOS-flAFMdBLye_qDrW7A2BraxNypdkLl2RRlayCaHv5uU8ZQJ2"
  //   script.type = 'text/javascript'
  //   script.async = true
  //   script.onload = () => setPaypalInjected(true)
  //   document.body.appendChild(script)
  // }
  var total = 0
  for(const productId of cartProducts){
    const price = products.find(p => p._id == productId)?.price || 0
    total+=price

  }

  const paypalProduct = {
    description: "loram",
    price: total
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

    // addPayPalScript()

  }, [])
  

  return (
    
    <>
      {domLoaded && 
      <div>

        <Nav/>

        <div className='flex w-4/5 mx-auto gap-10' >
          {cartProducts?.length > 0 && (
            <div className='w-3/4'>
              {products?.map((item, index) => <CardProduct key={index} product={item}/>)}
              <div>
                total: {total}
              </div>
            </div> 
            )
          }
          
          {cartProducts?.length > 0 &&
            <form method='post' action={'/api/checkout'} className='px-5 py-5 grow bg-blue-50 shadow-md '>
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
                className='flex gap-2 items-center justify-center w-full bg-green-500 text-white py-1 rounded-md  px-5 text-center mt-auto'
                
              >
                <span>CheckOut</span>
                <span>
                    <HiOutlineCash size={30} strokeWidth={1.2}/>
                </span>
              </button>
              {/* <PayPalCheckOutButton props={paypalProduct}/> */}
              <div id='google-pay'>
                {/* <GooglePlay/> */}
                <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: total.toString(),
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      />
              </div>
              
            </form>
          }

          {cartProducts?.length == 0 && 
            <div className='flex w-4/5 mx-auto gap-10'>
              No Products
            </div>
          }
        </div> 

      </div>
      }
      {!domLoaded && (
        <div>
          no products
        </div>
      )}
    </>
    
  )
}

export default CartPage