import React, { useEffect, useState } from 'react'

const GooglePlay = () => {

    let client;

    const [googleInjected, setGoogleInjected] = useState(false)

    const tokenizationSpecification = {
        type: "PAYMENT_GATEWAY",
        parameters: {
            gateway: "example",
            gatewayMerchantId: "gatewayMerchantId"
        }
    }

    const cardPaymentMethod = {
        type: "CARD",
        tokenizationSpecification: tokenizationSpecification,
        parameters: {
            allowedCardNetwroks: ["VISA", "MASTERCARD"],
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        }
    }

    const googlePayConfig = {
        apiVersion: 2,
        apiVersioninor: 0,
        allowedPaymentsMethod: [cardPaymentMethod],
    }


    const addGooglePayScript = () => {
      
      const script = document.createElement('script')
      script.src = "https://pay.google.com/gp/p/js/pay.js"
      script.type = 'text/javascript'
      script.async = true
      script.onload = googleLoaded()
      document.body.appendChild(script)
    }

    const googleLoaded = () => {
        client = new google.payments.api.PaymentsClient({
            environment: "TEST"
        })

        client.isReadyToPay(googlePayConfig)
            .then(res => {
                if(res.result){
                    createGoogleButton()
                }
            })
            .catch(error => {
                console.log("isReadyToPay error: ", error)
            })
    }

    const createGoogleButton = () => {
        const button = client.createButton()

        document.getElementById('google-pay').appendChild(button)
    }

    useEffect(() => {
        addGooglePayScript()
        if(googleInjected){

        }
    }, [])

  return (
    <div>GooglePlay</div>
  )
}

export default GooglePlay