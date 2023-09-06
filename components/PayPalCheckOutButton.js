import { PayPalButtons } from '@paypal/react-paypal-js'
import React, { useEffect, useState } from 'react'

const PayPalCheckOutButton = ({props}) => {
    const [paidFor, setPaidFor] = useState(false)
    const [loaded, setLoaded] = useState(false)
    console.log(props)

    const handleApprove = (orderID) => {
        // aprove order in here
        console.log(orderID)

        // if res.status 200 then set paidFor to true
        setPaidFor(true)
    }
    if(paidFor){
        alert("paid nice")
    }

    useEffect(()=> {
        setLoaded(true)
    })
    return (
        <>
        
        
        {loaded && props && <div>
            {console.log(props)}
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions?.order?.create({
                        purchased_units: [
                            {
                                description: props?.description,
                                amount: props?.price
                            }
                        ]
                    })
                }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture()
                    console.log(order)

                    handleApprove(data.orderID)
                }}   
                onError={(error) => {
                    console.error(error)
                }} 
            />
            {props.description}
            {props.price}
        </div>}
        </>
    )
}

export default PayPalCheckOutButton




/// this is branch text