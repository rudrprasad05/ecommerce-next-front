import { CartContextProvider } from '@/components/CartContext'
import '@/styles/globals.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function App({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={{
      "client-id": "AXenEMAinPWURlkjUFyzIuYI1QMjjXOS-flAFMdBLye_qDrW7A2BraxNypdkLl2RRlayCaHv5uU8ZQJ2"
    }}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider> 
    </PayPalScriptProvider>
    
  )
}
