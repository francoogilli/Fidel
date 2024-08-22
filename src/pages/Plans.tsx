import PricingCard from "../components/pricingCard";
import PricingComparison from "../components/pricingComparision";

const Plans = () => {
  return (
    <>
      <PricingCard viewComparison={false} />
      <PricingComparison />
    </>
  );
};

export default Plans;
