import React from 'react';
import Check from '../icons/checkIcon';
import Cross from '../icons/cross';
import Tooltip from './tooltip';
import InfoCircle from '../icons/infoCircle';

interface Benefit {
  text: string;
  active: boolean;
  tooltipInfo: string;
  displayText?: string;
}

interface PricingCardProps {
  name: string;
  price: number;
  bestOption: string;
  benefits: Benefit[];
}

const pricingData: PricingCardProps[] = [
  {
    name: "Básico",
    price: 10500,
    bestOption: "monotributistas",
    benefits: [
      { text: "Asesoría", active: true, tooltipInfo: "Tipo de asesoría", displayText: "prioritaria" },
      { text: "Usuarios", active: true, tooltipInfo: "Usuarios disponibles. Sin contar vendedores", displayText: "1" },
      { text: "Vendedores", active: false, tooltipInfo: "Vendedores para pedidos en app móvil", displayText: "-" },
      { text: "Gestión", active: false, tooltipInfo: "Compras, Proveedores y Estadísticas" },
      { text: "Portal de clientes", active: false, tooltipInfo: "Acceso a ventas y pagos" },
      { text: "Reportes Contables", active: false, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
      { text: "App Mobile", active: false, tooltipInfo: "Acceso a la aplicacion mobile." },
      { text: "Tienda Nube", active: false, tooltipInfo: "Integración con Tienda Nube." },
      { text: "Múltiples CUIT", active: false, tooltipInfo: "Facturar utilizando múltiples CUITs." },
      { text: "Percepciones Prov.", active: false, tooltipInfo: "Gestión de percepciones provinciales." },
    ],
  },
  {
    name: "Inicial",
    price: 13500,
    bestOption: "negocios locales",
    benefits: [
      { text: "Asesoría", active: true, tooltipInfo: "Asesoría rápida y eficaz.", displayText: "prioritaria" },
      { text: "Usuarios", active: true, tooltipInfo: "Acceso para 3 usuarios. Sin contar vendedores", displayText: "hasta 3" },
      { text: "Vendedores", active: false, tooltipInfo: "No incluye soporte para múltiples vendedores.", displayText: "-" },
      { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas" },
      { text: "Portal de clientes", active: true, tooltipInfo: "Acceso a ventas y pagos" },
      { text: "Reportes Contables", active: true, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
      { text: "App Mobile", active: true, tooltipInfo: "No incluye acceso a la aplicacion mobile." },
      { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
      { text: "Multicuit", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
      { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
    ],
  },
  {
    name: "Intermedio",
    price: 18500,
    bestOption: "pequeñas y medianas empresas",
    benefits: [
      { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." ,displayText: "prioritaria"},
      { text: "Usuarios", active: true, tooltipInfo: "Acceso para 6 usuarios. Sin contar vendedores", displayText: "hasta 6" },
      { text: "Vendedores", active: true, tooltipInfo: "Soporte para hasta 3 vendedores.", displayText: "hasta 3" },
      { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas" },
      { text: "Portal de clientes", active: true, tooltipInfo: "Acceso a ventas y pagos" },
      { text: "Reportes Contables", active: true, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
      { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
      { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
      { text: "Multicuit", active: true, tooltipInfo: "Permite facturar con hasta 2 CUITs diferentes.", displayText: "hasta 2" },
      { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
    ],
  },
  {
    name: "Avanzado",
    price: 23000,
    bestOption: "grandes empresas",
    benefits: [
      { text: "Asesoría personalizada", active: true, tooltipInfo: "Asesoría personalizada y detallada.",displayText: "personalizada" },
      { text: "Usuarios", active: true, tooltipInfo: "Acceso para 12 usuarios. Sin contar vendedores", displayText: "hasta 12 *" },
      { text: "Vendedores", active: true, tooltipInfo: "Soporte para hasta 9 vendedores.", displayText: "hasta 9 *" },
      { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas" },
      { text: "Portal de clientes", active: true, tooltipInfo: "Acceso a ventas y pagos" },
      { text: "Reportes Contables", active: true, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
      { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
      { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
      { text: "Multicuit", active: true, tooltipInfo: "Permite facturar con hasta 6 CUITs diferentes.", displayText: "hasta 6 *" },
      { text: "Percepciones Prov.", active: true, tooltipInfo: "Gestión de percepciones provinciales incluida." },
    ],
  },
];

const PricingComparison: React.FC = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="overflow-x-auto rounded-3xl border border-[#e8e8e8]">
          <table className="min-w-full divide-y divide-[#e8e8e8] rounded-3xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 px-12 text-left font-medium rounded-tl-3xl">Características</th>
                {pricingData.map((plan, index) => (
                  <th key={index} className={`p-4 px-10 md:px-20 text-center font-medium ${index === pricingData.length - 1 ? 'rounded-tr-3xl' : ''}`}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#fdfdfd] divide-y divide-[#e8e8e8]">
              {pricingData[0].benefits.map((benefit, index) => (
                <tr key={index}>
                  <td className="p-4 text-sm justify-start flex items-center px-12 space-x-1.5">
                    <span>{benefit.text}</span>
                    <Tooltip text={benefit.tooltipInfo} hideOnSmallScreens={false}>
                      <InfoCircle />
                    </Tooltip>
                  </td>
                  {pricingData.map((plan, planIndex) => (
                    <td key={planIndex} className={`p-4 text-center ${index === pricingData[0].benefits.length - 1 ? 'rounded-bl-3xl' : ''}`}>
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
  
  export default PricingComparison;