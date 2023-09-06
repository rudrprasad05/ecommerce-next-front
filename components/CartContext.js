const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({})

export function CartContextProvider({ children }){

    const ls = typeof window != 'undefined' ? window.localStorage : null
    const defaultProducts = ls ? JSON.parse(ls?.getItem('cart')) : []


    const [cartProducts, setCartProducts] = useState(defaultProducts || [])
    const [cartCount, setCartCount] = useState(defaultProducts?.length || 0)



    const addCart = (productId) => {
    
        setCartProducts(prev => [...prev, productId])
        setCartCount(cartCount + 1)
        
    }

    const removeCart = (productId, all) => {
        // [...prev.filter((prevProduct) => prevProduct != productId)]
        if(!all){
            setCartProducts(prev => {
            const arr = [...prev]
            const index = arr.indexOf(productId);
            if (index > -1) { // only splice array when item is found
                arr.splice(index, 1); // 2nd parameter means remove one item only
            }

            return arr
            })
            setCartCount(cartCount - 1)
        }
        else{
            setCartProducts(prev => {
                var i = 0;
                let arr = [...prev]
                while (i < arr.length) {
                    if (arr[i] === productId) {
                    arr.splice(i, 1);
                    setCartCount(prev => prev - 1)
                    } else {
                    ++i;
                    }
                }
                return arr;
            })
        }
        
       
        
        
        
    }

    useEffect(() => {

        if(cartProducts.length >= 0 && cartProducts[0] != null){
            ls?.setItem('cart', JSON.stringify(cartProducts))
        }
        if(cartProducts.length == 0){
            ls?.removeItem('cart')
        }
   
    }, [cartProducts])

    useEffect(() => {
        if(ls && ls.getItem('cart')){
            setCartProducts(JSON.parse(ls.getItem('cart')))
        }
    }, [])

    return(
        <CartContext.Provider value={{cartProducts, removeCart, addCart, cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    )
}
