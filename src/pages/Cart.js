import CartDesktop from "../components/CartDesktop";
import CartMobile from "../components/CartMobile";
import Header from "../components/Header";

const Cart = () => {
  return (
    <div className="pb-16">
      <Header />
      <CartMobile />
      <CartDesktop />
    </div>
  );
};

export default Cart;
