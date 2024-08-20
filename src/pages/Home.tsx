import React from "react";
import Hero from "../components/hero";
import PricingCard from "../components/pricingCard";
import Recommend from "../components/recommend";
import { QuestionsAnswers } from "../components/questionsAnswers";
import CallToAction from "../components/callToAction";

const Home: React.FC = () => {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <PricingCard viewComparison />
      <Recommend />
      <QuestionsAnswers />
      <CallToAction />
    </>
  );
};

export default Home;
