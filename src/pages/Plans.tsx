import PricingCard from "../components/pricingCard"
import PricingComparison from "../components/pricingComparision"

export const Plans = () => {
    return (
        <>
        <PricingCard viewComparison={false} />
        <PricingComparison />
        </>
    )
}