import CartDesktop from "../components/CartDesktop";
import CartMobile from "../components/CartMobile";
import Header from "../components/Header";

const Cart = ({ addToCart }) => {
  return (
    <div className="pb-16">
      <Header addToCart={addToCart} />
      <CartMobile addToCart={addToCart} />
      <CartDesktop addToCart={addToCart} />
    </div>
  );
};

export default Cart;
