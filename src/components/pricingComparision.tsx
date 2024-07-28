import Check from '../icons/checkIcon';
import Cross from '../icons/cross';
import Tooltip from './tooltip';
import InfoCircle from '../icons/infoCircle';
import { pricingComparison } from '../data/data';


export default function PricingComparison() {
    return (
      <div className="max-w-7xl mx-auto px-4 pb-10 pt-3">
        <div className="flex items-center justify-between pb-10">
        <hr className="flex-grow border-t border-zinc-200" />
        <h2 className='text-2xl md:text-3xl font-medium text-center px-4 whitespace-nowrap'>
          Comparar planes
        </h2>
        <hr className="flex-grow border-t border-zinc-200" />
      </div>
        <div className="overflow-x-auto rounded-3xl border border-[#e8e8e8]">
          <table className="min-w-full divide-y divide-[#e8e8e8] rounded-3xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 px-12 text-left font-medium rounded-tl-3xl">Características</th>
                {pricingComparison.map((plan, index) => (
                  <th key={index} className={`p-4 px-10 md:px-20 text-center font-medium ${index === pricingComparison.length - 1 ? 'rounded-tr-3xl' : ''}`}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#fdfdfd] divide-y divide-[#e8e8e8]">
              {pricingComparison[0].benefits.map((benefit, index) => (
                <tr key={index}>
                  <td className="p-4 text-sm justify-start flex items-center px-6 md:px-12 space-x-1.5">
                    <span>{benefit.text}</span>
                    <Tooltip text={benefit.tooltipInfo} hideOnSmallScreens={false}>
                      <InfoCircle />
                    </Tooltip>
                  </td>
                  {pricingComparison.map((plan, planIndex) => (
                    <td key={planIndex} className={`p-4 text-center ${index === pricingComparison[0].benefits.length - 1 ? 'rounded-bl-3xl' : ''}`}>
                      {plan.benefits[index]?.displayText ? (
                        <span className='text-sm'>{plan.benefits[index].displayText}</span>
                      ) : plan.benefits[index]?.active ? (
                        <div className="flex items-center justify-center">
                          <Check />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Cross />
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  