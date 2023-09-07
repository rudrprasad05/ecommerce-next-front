import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen h-screen relative bg-background'>
        <div className='w-screen h-screen absolute z-0'>
            <img src="/hero_bg.png" alt="" className='w-full h-full object-cover relative z-10'/>
        </div>
        <div className='z-20 text-white absolute top-1/3 px-24'>
            <h1 className='text-8xl'>
                DevShop
            </h1>
            <h2 className='text-3xl my-2'>
                Your One Stop Tech Shop
            </h2>
            <div className='flex gap-5 my-4'>
                <button className='px-5 py-2 rounded-md bg-purple-500 '>
                    Our Proucts
                </button>
                <button className='px-5 py-2 rounded-md bg-purple-500'>
                    Blog
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero