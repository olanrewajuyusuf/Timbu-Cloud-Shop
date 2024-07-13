import Ellipse from '../assets/icons/Ellipse.png'
import check from '../assets/icons/check.png'
import Visa from '../assets/icons/Visa.png'
import mastercard from '../assets/icons/mastercard.png'
import paypal from '../assets/icons/paypal.png'
import tick from '../assets/icons/tick.png'
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const CheckoutForm = () => {
    const { totalPrice } = useContext(CartContext);
    const [value, setValue] = useState('');
    
  return (
    <>
    <div className='p-5 border-b-[1px] border-black'>
        <div>
            <p>Payment method</p>
            <div className='flex justify-between items-center mt-3'>
                <span className='w-[92px] h-[40px] flex justify-center items-center border-[1px] border-black relative rounded-[8px]'>
                    <img src={Visa} alt="cirle" />
                    <img className='absolute right-1 top-1' src={Ellipse} alt="cirle" />
                </span>
                <span className='w-[92px] h-[40px] flex justify-center items-center border-[1px] border-black relative rounded-[8px]'>
                    <img src={mastercard} alt="cirle" />
                    <img className='absolute right-1 top-1' src={check} alt="cirle" />
                </span>
                <span className='w-[92px] h-[40px] flex justify-center items-center border-[1px] border-black relative rounded-[8px]'>
                    <img src={paypal} alt="cirle" />
                    <img className='absolute right-1 top-1' src={Ellipse} alt="cirle" />
                </span>
            </div>
        </div>

        <form className='mt-10'>
            <label htmlFor="name">Cardholder’s name</label>
            <input 
                value={value}
                onCanPlay={(e)=> setValue(e.target.value)}
                className='w-full h-[40px] pl-5 bg-[#CBCBCB] border-[1px] border-[#4E4E4E] rounded-md text-[12px] my-2' 
                type="text" 
                name='name' 
                placeholder='Abhay City' 
            />
            <label htmlFor="number">Card number</label>
            <input 
                value={value}
                onCanPlay={(e)=> setValue(e.target.value)}
                className='w-full h-[40px] pl-5 bg-[#CBCBCB] border-[1px] border-[#4E4E4E] rounded-md text-[12px] mt-2' 
                type="number" 
                name='number' 
                placeholder='1111 2222 3333 4444' 
            />
            <div className='grid grid-cols-2 gap-5 my-5'>
                <div>
                    <label htmlFor="date">Expiry date</label>
                    <input 
                        value={value}
                        onCanPlay={(e)=> setValue(e.target.value)}
                        className='w-full h-[40px] pl-5 bg-[#CBCBCB] border-[1px] border-[#4E4E4E] rounded-md text-[12px] mt-2' 
                        type="text" 
                        name='date' 
                        placeholder='23/2027' 
                    />
                </div>
                <div>
                    <label htmlFor="cvv">CVV</label>
                    <input 
                        value={value}
                        onCanPlay={(e)=> setValue(e.target.value)}
                        className='w-full h-[40px] pl-5 bg-[#CBCBCB] border-[1px] border-[#4E4E4E] rounded-md text-[12px] mt-2' 
                        type="number" 
                        name='cvv' 
                        placeholder='123' 
                    />
                </div>
            </div>
        </form>
    </div>
    <div className='py-3 px-5 font-[600]'>
        <span className='flex justify-between'>
            <p>Subtotal</p>
            <p>₦{totalPrice.toFixed(2)}</p>
        </span>
        <span className='flex justify-between'>
            <p>Delivery</p>
            <p>₦2000</p>
        </span>
        <span className='flex justify-between'>
            <p>Total</p>
            <p>₦{totalPrice > 1 ? totalPrice + 2000 : '0.00'}</p>
        </span>

        <p className='my-3 flex items-center gap-1 text-[14px]'>
            <img src={tick} alt="tick" />
            Save details for future payments
        </p>
        <div className='flex justify-center'>
            <Link to='/'><button className='w-[290px] h-[58px] rounded-[44px] bg-[#333333] hover:bg-[#444444] text-white my-5 mx-auto'>Checkout</button></Link>
        </div>
    </div>
    </>
  )
}

export default CheckoutForm