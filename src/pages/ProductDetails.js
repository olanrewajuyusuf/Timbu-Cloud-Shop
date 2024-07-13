import React, { useState, useEffect, useContext } from "react";
import cartIcon from "../assets/icons/cart.svg";
import { CartContext } from "../contexts/CartContext";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/Api";
import productImageUrls from "../utils/productData";
import Header from "../components/Header";

const ProductDetails = ({
  searchQuery,
  handleSearchChange,
  showInput,
  setShowInput,
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProductById(id);
      setProduct({
        ...result,
        image: productImageUrls[result.id] || "/images/lace.png",
      });
    };

    fetchData();
  }, [id]);

  console.log(product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-svh py-[7rem] md:py-[10rem]">
      <Header
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />

      <div className="grid md:grid-cols-2 justify-start items-center gap-5 w-[90%] md:w-[70%] mx-auto border-[1px] p-5">
        <div className="w-full h-[350px] sm:h-[400px]">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="md:pl-5">
          <h1 className="text-[24px] mb-5 md:mb-20">{product.name}</h1>
          <p>
            Price:{" "}
            <span className="text-[orangered] font-bold">
              ₦{product.current_price}
            </span>
          </p>
          <div className="border-t-[1px] pt-5">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center text-black text-[10px] border border-black rounded-[15px] p-1 hover:bg-black hover:text-white"
            >
              <img className="w-5" src={cartIcon} alt="cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
