import React from 'react'
import CheckoutForm from './CheckoutForm'

const CheckoutMobile = () => {
  return (
    <div className='md:hidden mt-[20%] text-black font-[500]'>
        <div className='px-5 py-8'>
            <h2 className='text-[24px] font-[700]'>You’re almost there!</h2>
            <p>Provide your credit card information to complete your purchase.</p>
        </div>
        <CheckoutForm />
    </div>
  )
}

export default CheckoutMobile