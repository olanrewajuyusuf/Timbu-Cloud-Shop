import Header from "../components/Header";
import { useContext } from "react";
import cart from "../assets/icons/cart.svg";
import { CartContext } from "../contexts/CartContext";

const SearchPage = ({
  filteredDesktop,
  filteredMobile,
  searchQuery,
  handleSearchChange,
  showInput,
  setShowInput,
}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="px-5 py-24 md:px-10 md:pt-32 md:h-screen">
      <Header
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />

      {filteredMobile.map((product) => (
        <div className="md:hidden my-5" key={product.id}>
          <img
            className="w-full h-auto shadow-xl"
            src={product.image}
            alt="product"
          />
          <div className="flex justify-between items-start mt-4">
            <div className="font-bold text-black text-[16px]">
              <p>{product.name}</p>
              <p>₦{product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="flex items-center text-black text-[10px] border border-black rounded-[15px] p-1 hover:bg-black hover:text-white"
            >
              <img className="w-5" src={cart} alt="cart" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}

      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 justify-start items-start gap-10">
        {filteredDesktop.map((product) => (
          <div className="" key={product.id}>
            <div>
              <img
                className="w-full h-[300px] object-cover"
                src={product.image}
                alt="product"
              />
            </div>
            <div className="flex flex-col justify-between items-start mt-4 gap-3">
              <div className="font-bold text-black text-[16px]">
                <p>{product.name}</p>
                <p>₦{product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="flex items-center text-black text-[10px] border border-black rounded-[15px] p-1 hover:bg-black hover:text-white"
              >
                <img className="w-5" src={cart} alt="cart" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        {filteredDesktop.map((item) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
