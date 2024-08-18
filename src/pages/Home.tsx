import React from "react";
import Hero from "../components/hero";
import PricingCard from "../components/pricingCard";
import Recommend from "../components/recommend";
import { QuestionsAnswers } from "../components/questionsAnswers";

const Home: React.FC = () => {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <PricingCard viewComparison />
      <Recommend />
      <QuestionsAnswers />
    </>
  );
};

export default Home;
