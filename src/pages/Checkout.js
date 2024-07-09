import React from "react";
import CheckoutMobile from "../components/CheckoutMobile";
import CheckoutDesktop from "../components/CheckoutDesktop";

const Checkout = (searchQuery, handleSearchChange, showInput, setShowInput) => {
  return (
    <div className="min-h-svh">
      <CheckoutMobile />
      <CheckoutDesktop
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />
    </div>
  );
};

export default Checkout;
