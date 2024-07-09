import { products } from '../data/Mobile/LimitedEditions'
import { desktopProducts } from '../data/Desktop/LimitedEditions'
import LimitedEdition from './LimitedEdition'

const LimitedEditions = () => {
  return (
    <div className='p-5 md:px-10 my-10'>
        <h2 className='text-black text-center text-[34px] font-[700] mb-10'>Limited Editions</h2>
        <LimitedEdition products={products} desktopProducts={desktopProducts} />
    </div>
  )
}

export default LimitedEditions