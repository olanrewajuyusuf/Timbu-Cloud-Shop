import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </main>
  );
};

export default App;
