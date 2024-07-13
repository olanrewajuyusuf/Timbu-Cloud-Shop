import React from 'react'
import CheckoutForm from './CheckoutForm'
import ItemLeft from './ItemLeft'
import Header from './Header'
import arrow from '../assets/icons/arrowl.png'
import { Link } from 'react-router-dom'

const CheckoutDesktop = ({searchQuery, handleSearchChange, showInput, setShowInput}) => {
  return (
    <div className='hidden lg:block text-black p-20 pt-[11%]'>
      <Header 
        padding='80px'
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput} 
      />
      <div className='mb-10'>
        <Link to='/cart'><img src={arrow} alt="arrow" /></Link>
      </div>
      <div className='flex gap-10'>
        <ItemLeft />
        <div className='bg-[#A0A0A0]'>
            <h2 className='text-[24px] font-[600] p-5'>Payment Info.</h2>
            <CheckoutForm />
        </div>
      </div>
    </div>
  )
}

export default CheckoutDesktop