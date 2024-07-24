import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import PricingCard from "./components/pricingCard";

function App() {
  return (
    <>
      <div className="backgroundImage"></div>
      <Header />
      <Hero />
      <PricingCard/>
    </>
  );
}

export default App;
