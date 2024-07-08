import { useContext } from 'react'
import cart from '../assets/icons/cart.svg'
import { CartContext } from '../contexts/CartContext'

const LimitedEdition = ({products, desktopProducts}) => {
    const { addToCart } = useContext(CartContext);
    
  return (
    <div>
        {products && products.map(product => (
            <div className='md:hidden my-5' key={product.id}>
                <img className="w-full h-auto shadow-xl" src={product.image} alt="product" />
                <div className='flex justify-between items-start mt-4'>
                    <div className='font-bold text-black text-[16px]'>
                        <p>{product.name}</p>
                        <p>#{product.price}</p>
                    </div>
                    <button 
                    onClick={() => addToCart(product)}
                    className="flex items-center text-black text-[10px] border border-black rounded-[15px] p-1 hover:bg-black hover:text-white"
                    >
                        <img className='w-5' src={cart} alt="cart" />
                        Add to Cart
                    </button>
                </div>
            </div>
        ))}

        {/* =====> Desktop Display <===== */}
        <div className='hidden md:grid grid-cols-2 lg:grid-cols-3 justify-start items-start gap-10'>
        {desktopProducts && desktopProducts.map(product => (
            <div className='' key={product.id}>
                <img className="w-full h-[400px] shadow-xl" src={product.image} alt="product" />
                <div className='flex flex-col justify-between items-start mt-4 gap-3'>
                    <div className='font-bold text-black text-[16px]'>
                        <p>{product.name}</p>
                        <p>#{product.price}</p>
                    </div>
                    <button 
                    onClick={() => addToCart(product)}
                    className="flex items-center text-black text-[10px] border border-black rounded-[15px] p-1 hover:bg-black hover:text-white">
                        <img className='w-5' src={cart} alt="cart" />
                        Add to Cart
                    </button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default LimitedEdition