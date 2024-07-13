import { useContext } from "react";
import Expand_down from "../assets/icons/Expand_down.png";
import Expand_up from "../assets/icons/Expand_up.png";
import close from "../assets/icons/close.png";
import { CartContext } from "../contexts/CartContext";

const ItemLeft = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="w-[80%]">
        <h2 className='text-[24px] font-[900] mb-5'>Shopping Cart</h2>
        <p className='font-[600] mb-8'>You have {cart.length} items in your cart</p>

        <table className="w-full text-black font-[600] text-[20px]">
            <tbody>
              {cart.map(item => (
                <tr className="">
                <td className='text-start md:flex items-center gap-5'>
                  <img
                    className="my-5 w-[139px] h-[155px] object-cover rounded-lg border-[1px] border-black"
                    src={item.image}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                </td>
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
                  <div className="md:flex justify-between items-center w-full">
                    <span>₦{item.current_price[0].NGN[0] * item.quantity.toFixed(2)}</span> 
                    <img onClick={() => removeFromCart(item.id)} src={close} alt="close menu" />
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default ItemLeft