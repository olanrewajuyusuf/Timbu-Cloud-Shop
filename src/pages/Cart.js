import CartDesktop from "../components/CartDesktop";
import CartMobile from "../components/CartMobile";

const Cart = () => {
  return (
    <div className="bg-[#CBCBCB] pt-24 md:pt-0 pb-16">
      <CartMobile />
      <CartDesktop />
    </div>
  );
};

export default Cart;
