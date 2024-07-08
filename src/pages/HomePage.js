import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LimitedEditions from "../components/LimitedEditions";
import Products from "../components/Products";

const HomePage = ({ setAddToCart }) => {
  return (
    <div>
      <Header />
      <Hero />
      <Products setAddToCart={setAddToCart} />
      <LimitedEditions setAddToCart={setAddToCart} />
      <Footer />
    </div>
  );
};

export default HomePage;
