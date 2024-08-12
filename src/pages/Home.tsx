import React from "react";
import Hero from "../components/hero";
import PricingCard from "../components/pricingCard";
import PricingComparison from "../components/pricingComparision";
import Recommend from "../components/recommend";
import { QuestionsAnswers } from "../components/questionsAnswers";

const Home: React.FC = () => {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <PricingCard />
      <PricingComparison />
      <QuestionsAnswers />
      <Recommend />
    </>
  );
};

export default Home;
