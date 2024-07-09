import CartDesktop from "../components/CartDesktop";
import CartMobile from "../components/CartMobile";

const Cart = ({ searchQuery, handleSearchChange, showInput, setShowInput }) => {
  return (
    <div className="bg-[#CBCBCB] min-h-svh pt-24 md:pt-0 pb-16">
      <CartMobile
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />
      <CartDesktop
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />
    </div>
  );
};

export default Cart;
