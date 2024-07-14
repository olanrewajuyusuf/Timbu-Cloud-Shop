import React, { useState, useEffect, useContext } from 'react';
import { fetchProducts } from '../utils/Api';
// import productImageUrls from '../utils/productData';
import cart from '../assets/icons/cart.svg'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const loadProducts = async () => {
          try {
            const data = await fetchProducts(currentPage);
            // const enhancedProducts = data.items.map(product => ({
            //     ...product,
            //     image: productImageUrls[product.id] || '/images/lace.png'
            //   }));
              // setProducts(enhancedProducts);
              setProducts(data.items);
          } catch (error) {
            setError(error.message);
          }
        };
        loadProducts();
      }, [currentPage]);


      const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
      };

  return (
    <div className="px-5 md:px-10 pt-36">
      <div className='text-[#333333] text-[20px] md:text-[36px] border-b-[1px] border-black font-bold'>
            <p>Bridal Headgears</p>
        </div>
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-10 mt-5">
        {products.map((product) => (
          <div key={product.id} className="hover:p-2 hover:shadow-xl shadow-black">
            <Link to={`/product/${product.id}`}>
            <div className='h-[330px]'>
                <img className='w-full h-full object-cover rounded-xl' src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name} />
            </div>
            </Link>
            <div className='flex md:flex-col justify-between items-start mt-4 gap-3'>
                    <div className='font-bold text-black text-[16px]'>
                        <p>{product.name}</p>
                        <p>₦{product.current_price[0].NGN[0].toFixed(2)}</p>
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
      <div className="text-[16px] md:text-[20px] py-10 font-bold">
        <div className=' w-[150px] md:w-[200px] px-3 md:px-5 py-3 border-[1px] border-[#333333] rounded-lg mx-auto flex justify-between items-center shadow-lg shadow-black'>
            <button className='cursor-pointer active:underline' onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
            </button>
            <button className='cursor-pointer active:underline' onClick={handleNextPage}>
            Next
            </button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductPage
