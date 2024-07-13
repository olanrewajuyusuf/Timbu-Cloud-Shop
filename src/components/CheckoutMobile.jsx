import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Link } from 'react-router-dom'
import arrowl from '../assets/icons/arrowl.png'
import ItemLeft from './ItemLeft'

const CheckoutMobile = () => {
  return (
    <div className='lg:hidden text-black font-[500]'>
      <div className='mb-5 px-5 pt-10'>
        <Link to='/cart'><img className='w-3' src={arrowl} alt="arrow" /></Link>
      </div>
        <div className='px-5 pb-8'>
            <h2 className='text-[24px] font-[700]'>You’re almost there!</h2>
            <p>Provide your credit card information to complete your purchase.</p>
        </div>
        <CheckoutForm />
        <div className='px-5'>
          <ItemLeft />
        </div>
    </div>
  )
}

export default CheckoutMobile