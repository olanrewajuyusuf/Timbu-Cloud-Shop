// import Arrow from "../assets/icons/Arrow.png";
import Expand_down from "../assets/icons/Expand_down.png";
import Expand_up from "../assets/icons/Expand_up.png";
import close from "../assets/icons/close.png";
import clustered from "../assets/images/desktop/latest/clustered.png";
import turkey from "../assets/images/desktop/latest/turkey.png";
import headgear from "../assets/images/desktop/limited/headgear.png";

const ItemLeft = () => {
  return (
    <div className="w-[80%]">
        <h2 className='text-[24px] font-[900] mb-5'>Shopping Cart</h2>
        <p className='font-[600] mb-8'>You have 3 items in your cart</p>

        <table className="w-full text-black font-[600] text-[20px]">
            <tbody>
            <tr className="">
              <td className='text-start flex items-center gap-5'>
                <img
                  className="my-5 w-[124px] h-[124px] object-cover"
                  src={headgear}
                  alt="pearl"
                />
                <p className=" ">Feathered Headgear</p>
              </td>
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

            <tr className="">
              <td className='text-start flex items-center gap-5'>
                <img
                  className="my-5 w-[124px] h-[124px] object-cover"
                  src={clustered}
                  alt="pearl"
                />
                <p className=" ">Clustered Beaded</p>
              </td>
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
            <tr className="">
              <td className='text-start flex items-center gap-5'>
                <img
                  className="my-5 w-[124px] h-[124px] object-cover"
                  src={turkey}
                  alt="pearl"
                />
                <p className=" ">Turkish Stylish</p>
              </td>
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
            </tbody>
        </table>
    </div>
  )
}

export default ItemLeft