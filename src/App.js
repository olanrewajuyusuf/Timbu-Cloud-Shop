import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import { products } from "./data/Mobile/LimitedEditions";
import { headgearsDesktop } from "./data/Search";
import { desktopProducts } from "./data/Desktop/LimitedEditions";
import { headgearsMobile } from "./data/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const mobileItems = [...products, ...headgearsMobile];
  const desktopItems = [...headgearsDesktop, ...desktopProducts];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery.length > 1) {
      navigate("/search");
    } else {
      navigate("/");
    }
  };

  const filteredDesktop = desktopItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMobile = mobileItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              showInput={showInput}
              setShowInput={setShowInput}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              showInput={showInput}
              setShowInput={setShowInput}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              showInput={showInput}
              setShowInput={setShowInput}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              filteredDesktop={filteredDesktop}
              filteredMobile={filteredMobile}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              showInput={showInput}
              setShowInput={setShowInput}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;
