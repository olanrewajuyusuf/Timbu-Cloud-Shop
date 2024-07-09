import { Link } from "react-router-dom";
import Arrow from "../assets/icons/Arrow.png";
import Expand_down from "../assets/icons/Expand_down.png";
import Expand_up from "../assets/icons/Expand_up.png";
import close from "../assets/icons/close.png";
import React, { useContext, useState } from 'react';
import { CartContext } from "../contexts/CartContext";
import Header from "./Header";

const CartMobile = ({searchQuery, handleSearchChange, showInput, setShowInput}) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);
  const [value, setValue] = useState('')

  return (
    <div className="md:hidden">
      <Header 
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />
        <h1 className="bg-[#4E4E4E] text-center font-[800] text-[24px] text-white py-5 ">
          Shopping Cart
        </h1>

        {cart.length < 1 && (
            <div className="flex justify-center items-center h-40 font-bold text-[16px]">
              <p>Your cart is empty</p>
            </div>
        )}
        {cart.length > 0 && cart.map(item => (
          <div key={item.id} className="p-5">
            <div  className="flex items-center font-[600] gap-4 border-b-[1px] border-black py-3">
            <img
              className="w-[124px] h-[124px] object-cover"
              src={item.image}
              alt='product'
            />
            <div className="w-full">
              <p>{item.name}</p>
              <div className="flex justify-between items-center gap-5 pt-3">
                <div className="flex justify-between items-center gap-5">
                  <span className="flex justify-between items-center border border-[#999999] w-[70px] px-1">
                    <span>{item.quantity}</span>
                    <span>
                      <img onClick={() => increaseQuantity(item.id)} src={Expand_up} alt="arrow up" />
                      <img onClick={() => decreaseQuantity(item.id)} src={Expand_down} alt="arrow down" />
                    </span>
                  </span>
                  <span>₦{item.price * item.quantity.toFixed(2)}</span>
                </div>
                <img onClick={() => removeFromCart(item.id)} src={close} alt="close menu" />
              </div>
            </div>
          </div>
        </div>))}

        <div className="text-black font-[600] flex flex-col gap-3 px-5 mt-10">
          <p>Do you have a discount?</p>
          <div className="bg-[#999999] text-[12px] w-[234px] h-[42px] flex justify-between items-center rounded-e-2xl pl-3">
            <input 
            className="bg-transparent outline-none placeholder:text-[#333333]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text" 
            placeholder="Enter Your Coupon Code" />
            <div className="bg-black w-[42px] h-[42px] flex items-center justify-center rounded-full">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <p>Delivery</p>
          <div className="border-[2px] border-black w-[283px] h-[63px] flex justify-between items-center px-3">
            <span>Indrive - ₦2000</span>
            <img src={Expand_down} alt="arrow down" />
          </div>
          <div className="flex justify-between items-center w-[283px] text-[24px]">
            <span>Total</span>
            <span>₦{totalPrice.toFixed(2)}</span>
          </div>
          <Link
            className="bg-[#333333] hover:bg-[#555555] text-white w-[220px] h-[51px] flex justify-center items-center rounded-[10px]"
            to="/checkout"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
  )
}

export default CartMobile