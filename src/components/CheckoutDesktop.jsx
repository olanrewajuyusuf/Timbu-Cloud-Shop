import React from 'react'
import CheckoutForm from './CheckoutForm'
import ItemLeft from './ItemLeft'

const CheckoutDesktop = () => {
  return (
    <div className='hidden md:flex gap-10 mt-[7%] text-black p-20'>
        <ItemLeft />
        <div className='bg-[#4E4E4E]'>
            <h2 className='text-[24px] font-[600] p-5'>Payment Info.</h2>
            <CheckoutForm />
        </div>
    </div>
  )
}

export default CheckoutDesktop