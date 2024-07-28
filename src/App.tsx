import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import PricingCard from "./components/pricingCard";
import PricingComparison from "./components/pricingComparision";

function App() {
  return (
    <>
      <div className="backgroundImage"></div>
      <Header />
      <Hero />
      <PricingCard/>
      <PricingComparison/>
      <Footer/>
    </>
  );
}

export default App;
