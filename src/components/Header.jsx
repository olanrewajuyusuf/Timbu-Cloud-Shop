import logo from '../assets/icons/YTBridal.png'
import cart from '../assets/icons/cart.svg'
import search from '../assets/icons/search.svg'
import { Link } from 'react-router-dom'
import InputField from './InputField'

const Header = ({padding, searchQuery, handleSearchChange, showInput, setShowInput}) => {

  const styles = {
    paddingInline: padding
  }

  return (
    <header 
    style={styles} 
    className='fixed top-0 left-0 w-full bg-[#CBCBCB] z-10 px-5 md:px-10 pt-10 pb-2 text-[#333333]'
    >
      <nav className='flex justify-between items-center'>
          <Link to='/'>
            <img className='w-[90px] md:w-[100px] lg:w-[160px]' src={logo} alt="logo" />
          </Link>

          <div className='flex gap-5 md:gap-10'>
              <div className='relative'>
                <InputField searchQuery={searchQuery} handleSearchChange={handleSearchChange} showInput={showInput} />
                <Link><img onClick={()=>setShowInput(!showInput)} className='w-6 sm:w-10 sm:h-10' src={search} alt="search icon" /></Link>
              </div>
              <Link to='/cart'><img className='w-6 sm:w-10 sm:h-10' src={cart} alt="cart icon" /></Link>
          </div>
        </nav>
    </header>
  )
}

export default Header