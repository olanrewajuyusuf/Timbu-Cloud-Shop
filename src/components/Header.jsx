import Menu from '../assets/icons/Menu.png'
import avarter from '../assets/icons/avarter.svg'
import cart from '../assets/icons/cart.svg'
import search from '../assets/icons/search.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full bg-[#CBCBCB] z-10 px-5 md:px-20 pt-10 pb-2 border border-t-0 border-x-0 border-b-4 border-[black] text-[#333333]'>
      {/* =====> Mobile Header <===== */}
        <nav className='md:hidden flex justify-between items-center'>
            <img className='cursor-pointer' src={Menu} alt="menu icon" onClick={() => setShowMenu(!showMenu)}/>
            <ul className={showMenu ? 'ul_toggle' : 'absolute left-[-100%]'}>
                <Link to='/'><li className='hover:underline'>Home</li></Link>
                <Link to='/about'><li className='hover:underline'>About</li></Link>
                <Link to='/shop'><li className='hover:underline'>Shop</li></Link>
            </ul>
            <div className='flex gap-5 sm:gap-2'>
              <Link><img className='w-6 sm:w-10' src={search} alt="search icon" /></Link>
              <Link to='/cart'><img className='w-6 sm:w-10' src={cart} alt="cart icon" /></Link>
              <Link><img className='w-6 sm:w-10' src={avarter} alt="avarter icon" /></Link>
            </div>
        </nav>

        {/* =====> Desktop Header <===== */}
        <nav className='hidden md:flex justify-between items-center'>
            <ul className='flex gap-5 font-bold text-[20px] lg:text-2xl text-[#333333]'>
                <Link to='/'><li className='hover:underline text-[#333333]'>Home</li></Link>
                <Link to='/about'><li className='hover:underline'>About</li></Link>
                <Link to='/shop'><li className='hover:underline'>Shop</li></Link>
            </ul>
            <div className='flex gap-[56px]'>
              <Link><img className='w-6 sm:w-10' src={search} alt="search icon" /></Link>
              <Link to='/cart'><img className='w-6 sm:w-10' src={cart} alt="cart icon" /></Link>
              <Link><img className='w-6 sm:w-10' src={avarter} alt="avarter icon" /></Link>
            </div>
        </nav>
    </header>
  )
}

export default Header