import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import PricingCard from "./components/pricingCard";
import PricingComparison from "./components/pricingComparision";
import Recommend from "./components/recommend";

function App() {
  return (
    <>
      <div className="backgroundImage"></div>
      <Header />
      <Hero />
      <PricingCard/>
      <PricingComparison/>
      <Recommend/>
      <Footer/>
    </>
  );
}

export default App;
