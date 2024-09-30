import React from "react";
import Hero from "../components/hero";
import PricingCard from "../components/pricingCard";
import Recommend from "../components/recommend";
import { QuestionsAnswers } from "../components/questionsAnswers";
import Contact from "../components/contact";
import AppMobile from "../components/appMobile";
import Integration from "../components/integration";

const Home: React.FC = () => {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <PricingCard viewComparison />
      <AppMobile />
      <Integration />
      <Recommend />
      <QuestionsAnswers />
      <Contact />
    </>
  );
};

export default Home;
