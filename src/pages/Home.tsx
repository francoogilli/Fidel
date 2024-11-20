import React from "react";
import Hero from "../components/hero";
import PricingCard from "../components/pricingCard";
import Recommend from "../components/recommend";
import { QuestionsAnswers } from "../components/questionsAnswers";
import Contact from "../components/contact";
import Mobile from "../components/mobile";
import Integration from "../components/integration";
import Advantages from "../components/advantages";
import Customers from "../components/customers";

const Home: React.FC = () => {
  return (
    <>
      <div className="backgroundImage"></div>
      <Hero />
      <Customers/>
      <PricingCard viewComparison />
      <Advantages />
      <Mobile />
      <Integration />
      <Recommend />
      <QuestionsAnswers />
      <Contact />
    </>
  );
};

export default Home;
