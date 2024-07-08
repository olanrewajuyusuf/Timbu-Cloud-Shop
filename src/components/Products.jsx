import Vector from '../assets/icons/Vector.png'
import Product from './Product'
import { products } from '../data/Mobile/Products'
import { desktopProducts } from '../data/Desktop/Products'
import { NavLink } from "react-router-dom"

const Products = ({setAddToCart}) => {
  return (
    <div className='p-5 md:px-10'>
        {/* =====> Mobile products display <===== */}
        <div className='mt-14 md:hidden'>
            <div className='flex justify-between items-center text-black'>
                <details className='dropdown relative'>
                <summary className="font-[900]">Category</summary>
                <ul className="menu dropdown-content bg-white rounded-lg z-[1] w-52 p-2 shadow absolute left-0">
                    <NavLink><li>Bridal Dress</li></NavLink>
                    <NavLink><li>Bridal Shoes</li></NavLink>
                    <NavLink><li>Bridal Bouquet</li></NavLink>
                    <NavLink><li>Bridal Headgears</li></NavLink>
                    <NavLink><li>Bridal Fan</li></NavLink>
                </ul>
                </details>

                <div className='flex justify-center items-center gap-2'>
                    <p>Sort By Relevance</p>
                    <img className='w-3 h-2' src={Vector} alt="arrow" />
                </div>
            </div>
            <Product products={products} setAddToCart={setAddToCart} />
        </div>

        {/* =====> Desktop products display <===== */}
        <div className='hidden mt-14 md:block'>
            <div className='flex justify-end items-center gap-2 mb-5'>
                <p>Sort By Relevance</p>
                <img className='w-3 h-2' src={Vector} alt="arrow" />
            </div>
            <div className='flex items-start justify-start gap-5'>
                <ul className="w-[20%] text-[#A0A0A0]">
                    <li className="text-black font-[900] flex justify-start items-center gap-2 mb-3">Category
                      <img className='w-3 h-2' src={Vector} alt="arrow" />
                    </li>
                    <NavLink><li>Bridal Dress</li></NavLink>
                    <NavLink><li>Bridal Shoes</li></NavLink>
                    <NavLink><li>Bridal Bouquet</li></NavLink>
                    <NavLink><li className='text-black'>Bridal Headgears</li></NavLink>
                    <NavLink><li>Bridal Fan</li></NavLink>
                </ul>

                <Product desktopProducts={desktopProducts} setAddToCart={setAddToCart} />
            </div>
        </div>
    </div>
  )
}

export default Products