import Footer from "../components/Footer";
import Header from "../components/Header";
// import Hero from "../components/Hero";
import LimitedEditions from "../components/LimitedEditions";
import Products from "../components/Products";

const HomePage = ({
  searchQuery,
  handleSearchChange,
  showInput,
  setShowInput,
}) => {
  return (
    <div>
      <Header
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        showInput={showInput}
        setShowInput={setShowInput}
      />
      {/* <Hero /> */}
      <Products />
      <LimitedEditions />
      <Footer />
    </div>
  );
};

export default HomePage;
