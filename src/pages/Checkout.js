import React from "react";
import Header from "../components/Header";
import CheckoutMobile from "../components/CheckoutMobile";
import CheckoutDesktop from "../components/CheckoutDesktop";

const Checkout = () => {
  return (
    <div>
      <Header />
      <CheckoutMobile />
      <CheckoutDesktop />
    </div>
  );
};

export default Checkout;
