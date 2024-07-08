import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LimitedEditions from "../components/LimitedEditions";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <LimitedEditions />
      <Footer />
    </div>
  );
};

export default HomePage;
