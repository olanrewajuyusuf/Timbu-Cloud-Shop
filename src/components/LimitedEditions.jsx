import { products } from '../data/Mobile/LimitedEditions'
import { desktopProducts } from '../data/Desktop/LimitedEditions'
import LimitedEdition from './LimitedEdition'
import { NavLink } from 'react-router-dom'

const LimitedEditions = ({setAddToCart}) => {
  return (
    <div className='p-5 md:px-10 mt-10'>
        <h2 className='text-black text-center text-[34px] font-[700] mb-10'>Limited Editions</h2>
        <LimitedEdition products={products} desktopProducts={desktopProducts} setAddToCart={setAddToCart} />
        <ul className='flex justify-center items-center gap-5 md:text-[32px] text-gray-600 my-10 md:my-20'>
            <NavLink><li>1</li></NavLink>
            <NavLink><li className='bg-[#4E4E4E] px-2 md:px-3 text-black'>2</li></NavLink>
            <NavLink><li>3</li></NavLink>
            <NavLink><li>...</li></NavLink>
            <NavLink><li>{'>'}</li></NavLink>
        </ul>
    </div>
  )
}

export default LimitedEditions