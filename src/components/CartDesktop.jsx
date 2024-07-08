import { Link } from "react-router-dom";
import Arrow from "../assets/icons/Arrow.png";
import Expand_down from "../assets/icons/Expand_down.png";
import Expand_up from "../assets/icons/Expand_up.png";
import close from "../assets/icons/close.png";
import Pearl from "../assets/images/mobile/latest/pearl.png";

const CartDesktop = ({addToCart}) => {
  return (
    <div className="hidden md:block p-20">
        <h1 className="bg-[#4E4E4E] text-center font-[800] text-[32px] text-white py-5 mt-[7%]">
          Your Shopping Cart
        </h1>

        <div className="py-5">
          <table className="w-full text-black font-[600] text-[20px]">
            <tr className="">
              <th className='text-start'>Product</th>
              <th className='text-start'>Price</th>
              <th className='text-start'>Qty</th>
              <th className='text-start'>Total</th>
            </tr>
            <tr className="border-b-[1px] border-black">
              <td className='text-start flex items-center gap-5'>
                <img
                  className="w-[124px] h-[124px] object-cover"
                  src={Pearl}
                  alt="pearl"
                />
                <p className=" ">Feathered Headgear</p>
              </td>
              <td className='text-start'>#12,000</td>
              <td className='text-start'>
                  <span className="flex justify-between items-center border border-[#999999] w-[70px] px-1">
                    <span>2</span>
                    <span>
                      <img src={Expand_up} alt="arrow up" />
                      <img src={Expand_down} alt="arrow down" />
                    </span>
                  </span>
              </td>
              <td className='text-start'>
                <div className="flex justify-between items-center w-full">
                  <span>#24,000</span> 
                  <img src={close} alt="close menu" />
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div className="text-black font-[600] flex justify-between items-start px-5 mt-10">
            <div>
                <p>Do you have a discount?</p>
                <div className="bg-[#999999] text-[#333333] text-[12px] w-[234px] h-[42px] flex justify-between items-center rounded-e-2xl pl-3 mt-3">
                    Enter Your Coupon Code
                    <div className="bg-black w-[42px] h-[42px] flex items-center justify-center rounded-full">
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
            </div>

            <div>
                <p>Delivery</p>
                <div className="border-[2px] border-black w-[283px] h-[63px] flex justify-between items-center px-3 my-3">
                    <span>Indrive - #2000</span>
                    <img src={Expand_down} alt="arrow down" />
                </div>
                <div className="flex justify-between items-center w-[283px] text-[24px]">
                    <span>Total</span>
                    <span>#45,000</span>
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