import Product from './Product'
import { products } from '../data/Mobile/Products'
import { desktopProducts } from '../data/Desktop/Products'

const Products = () => {
  return (
    <div className='px-5 pt-20 md:pt-40 md:px-10'>
        <div className='text-[#333333] text-[20px] md:text-[36px] border-b-[1px] border-black font-bold mt-10'>
            <p>Bridal Headgears</p>
        </div>

        {/* =====> Mobile products display <===== */}
        <div className=' md:hidden'>
            <Product products={products} />
        </div>

        {/* =====> Desktop products display <===== */}
        <div className='hidden mt-14 md:block'>
            <Product desktopProducts={desktopProducts} />
        </div>
    </div>
  )
}

export default Products