import React from "react";
import Hero from "../components/hero";
import PricingCard from "../components/pricingCard";
import PricingComparison from "../components/pricingComparision";
import Recommend from "../components/recommend";

const Home: React.FC = () => {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <PricingCard />
      <PricingComparison />
      <Recommend />
    </>
  );
};

export default Home;
