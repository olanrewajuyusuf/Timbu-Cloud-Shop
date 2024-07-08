import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [addToCart, setAddToCart] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(addToCart));
  }, [addToCart]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage setAddToCart={setAddToCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </main>
  );
};

export default App;
