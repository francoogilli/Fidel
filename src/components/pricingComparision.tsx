import React from 'react';
import Check from '../icons/checkIcon';
import Cross from '../icons/cross';
import Tooltip from './tooltip';
import InfoCircle from '../icons/infoCircle';

interface Benefit {
  text: string;
  active: boolean;
  tooltipInfo: string;
  displayText?: string; // Texto que se muestra en lugar de un ícono
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
      { text: "Gestión", active: false, tooltipInfo: "Compras, Proveedores y Estadísticas"},
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
      { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas"},
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
      { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas"},
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
      { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas"},
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
    <div className="md:flex flex-col max-w-7xl mx-auto px-4 pb-10 hidden">
      <div className="flex bg-gray-50 border-b border-gray-300 rounded-t-3xl">
        <div className="flex-1 p-4 font-medium text-center">Características</div>
        {pricingData.map((plan, index) => (
          <div key={index} className="flex-1 p-4 font-medium text-center">
            {plan.name}
          </div>
        ))}
      </div>
      <div>
        {pricingData[0].benefits.map((benefit, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="flex-1 text-sm p-4 flex items-center space-x-2 border-b border-gray-300">
              <span className="flex pl-12 text-center">{benefit.text}</span>
              <Tooltip text={benefit.tooltipInfo}>
                <InfoCircle />
              </Tooltip>
            </div>
            {pricingData.map((plan, planIndex) => (
              <div key={planIndex} className="flex-1 p-4 text-center border-b border-gray-300">
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
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComparison;
