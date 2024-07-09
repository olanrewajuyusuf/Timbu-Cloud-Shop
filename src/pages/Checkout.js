import React from "react";
import CheckoutMobile from "../components/CheckoutMobile";
import CheckoutDesktop from "../components/CheckoutDesktop";

const Checkout = () => {
  return (
    <div>
      <CheckoutMobile />
      <CheckoutDesktop />
    </div>
  );
};

export default Checkout;
