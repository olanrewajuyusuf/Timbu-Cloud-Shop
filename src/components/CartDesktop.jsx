import { Link } from "react-router-dom";
import Arrow from "../assets/icons/Arrow.png";
import Expand_down from "../assets/icons/Expand_down.png";
import Expand_up from "../assets/icons/Expand_up.png";
import close from "../assets/icons/close.png";
import React, { useContext, useState } from 'react';
import { CartContext } from "../contexts/CartContext";
import Header from "./Header";

const CartDesktop = ({searchQuery, handleSearchChange, showInput, setShowInput}) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);
  const [value, setValue] = useState('')

  return (
    <div className="hidden md:block px-20 pt-14 text-[#333333]">
      <Header 
        padding='80px'
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />
        <h1 className="bg-[#4E4E4E] text-center font-[800] text-[32px] text-white py-5 mt-[7%]">
          Your Shopping Cart
        </h1>

        <div className="py-5">
          {cart.length < 1 && (
            <div className="flex justify-center items-center h-40 font-bold text-[24px]">
              <p>Your cart is empty</p>
            </div>
          )}
          {cart.length > 0 && <table className="w-full font-[600] text-[20px]">
            <thead>
              <tr className="">
                <th className='text-start'>Product</th>
                <th className='text-start'>Price</th>
                <th className='text-start'>Qty</th>
                <th className='text-start'>Total</th>
              </tr>
            </thead>
            <tbody >
            {cart.map(item => (
              <tr key={item.id} className="border-b-[1px] border-black">
                <td className='text-start flex items-center gap-16'>
                  <div className="w-[199px] h-[196.82px] rounded-lg border-[1px] overflow-hidden border-black mt-3 mb-5">
                    <img
                      className="w-full h-full object-cover"
                      src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`}
                      alt="pearl"
                    />
                  </div>
                  <p className=" ">{item.name}</p>
                </td>
                <td className='text-start'>₦{item.current_price[0].NGN[0]}</td>
                <td className='text-start'>
                    <span className="flex justify-between items-center border border-[#999999] w-[70px] px-1">
                      <span>{item.quantity}</span>
                      <span>
                        <img onClick={() => increaseQuantity(item.id)} src={Expand_up} alt="arrow up" />
                        <img onClick={() => decreaseQuantity(item.id)} src={Expand_down} alt="arrow down" />
                      </span>
                    </span>
                </td>
                <td className='text-start'>
                  <div className="flex justify-between items-center w-full">
                    <span>₦{item.current_price[0].NGN[0] * item.quantity.toFixed(2)}</span> 
                    <img onClick={() => removeFromCart(item.id)} src={close} alt="close menu" />
                  </div>
                </td>
              </tr>))}
            </tbody>
          </table>}
        </div>

        <div className="text-black font-[600] flex justify-between items-start mt-10">
            <div>
                <p>Do you have a discount?</p>
                <div className="bg-[#999999] text-[12px] w-[234px] h-[42px] flex justify-between items-center rounded-e-2xl pl-3 mt-3">
                    <input 
                        className="bg-transparent outline-none placeholder:text-[#333333]"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text" 
                        placeholder="Enter Your Coupon Code" 
                    />
                    <div className="bg-black w-[42px] h-[42px] flex items-center justify-center rounded-full">
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
            </div>

            <div>
                <p>Delivery</p>
                <div className="border-[2px] border-black w-[283px] h-[63px] flex justify-between items-center px-3 my-3">
                    <span>Indrive - ₦2000</span>
                    <img src={Expand_down} alt="arrow down" />
                </div>
                <div className="flex justify-between items-center w-[283px] text-[24px]">
                    <span>Total</span>
                    <span>₦{totalPrice.toFixed(2)}</span>
                </div>
                <Link
                    className="bg-[#333333] hover:bg-[#555555] text-white w-[283px] h-[51px] flex justify-center items-center mt-3"
                    to="/checkout"
                >
                    Proceed to Checkout
                </Link>
            </div>
        </div>
      </div>
  )
}

export default CartDesktop