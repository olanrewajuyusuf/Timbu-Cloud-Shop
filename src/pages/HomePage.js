import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductPage from "../components/ProductPage";
// import Hero from "../components/Hero";
// import LimitedEditions from "../components/LimitedEditions";
// import Products from "../components/Products";

const HomePage = ({
  searchQuery,
  handleSearchChange,
  showInput,
  setShowInput,
}) => {
  return (
    <div className="">
      <Header
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />
      <ProductPage />
      {/* <Hero /> */}
      {/* <Products />
      <LimitedEditions /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
