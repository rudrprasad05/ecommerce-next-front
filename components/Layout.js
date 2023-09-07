import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Layout = ({children}) => {
    const [domLoaded, setDomLoaded] = useState(false)
    useEffect(() => {
        setDomLoaded(true)
    }, [])
  return (
    <>
        <Nav/>
        {domLoaded && 
            <div id="root" className='bg-background'>
                {...children}
            </div>
        }
    </>
  )
}

export default Layout