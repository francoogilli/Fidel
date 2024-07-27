import React from "react";
import Check from "../icons/checkIcon";
import CreditCardIcon from "../icons/creditCard";
import Cross from "../icons/cross";
import InfoCircle from "../icons/infoCircle"; // Suponiendo que tienes un icono de información
import Tooltip from "./tooltip";

interface Benefit {
  text: string;
  active: boolean;
  tooltipInfo?: string; // Nueva propiedad opcional para el tooltip
}

interface PricingCardProps {
  name: string;
  price: number;
  bestOption: string;
  benefits: Benefit[];
}

export default function PricingCard() {
  const pricingData: PricingCardProps[] = [
    {
      name: "Básico",
      price: 10500,
      bestOption: "monotributistas",
      benefits: [
        { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." },
        { text: "1 Usuario", active: true, tooltipInfo: "Acceso para 1 usuario. Sin contar vendedores" },
        { text: "Tienda Nube", active: false, tooltipInfo: "No incluye integración con Tienda Nube." },
        { text: "1 vendedor", active: false, tooltipInfo: "No incluye soporte para múltiples vendedores." },
        { text: "App Mobile", active: false, tooltipInfo: "No incluye acceso a la aplicacion mobile." },
        { text: "Multicuit", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Inicial",
      price: 13500,
      bestOption: "negocios locales",
      benefits: [
        { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." },
        { text: "3 usuarios", active: true, tooltipInfo: "Acceso para 3 usuarios. Sin contar vendedores" },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "1 vendedor", active: false, tooltipInfo: "No incluye soporte para múltiples vendedores." },
        { text: "App Mobile", active: false, tooltipInfo: "No incluye acceso a la aplicacion mobile." },
        { text: "Multicuit", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Intermedio",
      price: 18500,
      bestOption: "pequeñas y medianas empresas",
      benefits: [
        { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." },
        { text: "6 usuarios", active: true, tooltipInfo: "Acceso para 6 usuarios. Sin contar vendedores" },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "3 vendedores", active: true, tooltipInfo: "Soporte para hasta 3 vendedores." },
        { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
        { text: "Multicuit", active: true, tooltipInfo: "Permite facturar con hasta 2 CUITs diferentes." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Avanzado",
      price: 23000,
      bestOption: "grandes empresas",
      benefits: [
        { text: "Asesoría personalizada", active: true, tooltipInfo: "Asesoría personalizada y detallada." },
        { text: "12 usuarios", active: true, tooltipInfo: "Acceso para 12 usuarios. Sin contar vendedores" },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "9 Vendedores", active: true, tooltipInfo: "Soporte para hasta 9 vendedores." },
        { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
        { text: "Multicuit", active: true, tooltipInfo: "Permite facturar con hasta 6 CUITs diferentes." },
        { text: "Percepciones Prov.", active: true, tooltipInfo: "Gestión de percepciones provinciales incluida." },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-32 mb-10 px-4 space-y-7">
      <div className="flex justify-center">
        <div className="flex items-center rounded-xl border border-[#e9e9e9] bg-gradient-to-br from-[#f5f5f5] to-[#fff] px-3 py-1">
          <CreditCardIcon />
          <h2 className="text-base font-medium text-center ml-2">Precios</h2>
        </div>
      </div>
      <h3 className="animation-1 text-4xl md:text-5xl font-semibold text-center my-8 pb-4">
        Planes{" "}
        <span className="bg-gradient-to-r from-[#2fe22c] via-[#35fa32] to-[#ff9500] bg-clip-text text-transparent tracking-tight">
          únicos
        </span>{" "}
        para cada negocio.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {pricingData.map((pricing) => (
          <div
            className="flex flex-col p-6 text-center bg-gradient-to-br from-[#f7f7f7b9] to-[#fff] rounded-3xl border border-[#ededed] hover:scale-105 duration-500"
            key={pricing.name}
          >
            <h3 className="text-3xl text-left font-semibold bg-gradient-to-r from-[#131313] to-[#3d3d3d] bg-clip-text text-transparent">
              {pricing.name}
            </h3>
            <p className="font-light text-zinc-500 text-[10px] sm:text-xs text-left">
              Para {pricing.bestOption}
            </p>
            <div className="flex justify-start text-left items-baseline my-5">
              <span className="text-5xl font-semibold">
                ${Number(pricing.price).toLocaleString("en-US")}
              </span>
              <span className="font-light text-zinc-500 sm:text-xs text-left">
                /mes
              </span>
            </div>
            <hr className="border-dashed border-t-2 border-neutral-200 mb-5" />
            <p className="font-light text-zinc-500 sm:text-xs text-left pb-3">
              ¿Qué incluye?
            </p>
            <ul role="list" className="mb-7 space-y-2.5 text-left">
              {pricing.benefits.map((benefit, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center space-x-2 justify-between">
                    <div className="flex items-center space-x-2">
                      {benefit.active ? <Check /> : <Cross />}
                      <span className="text-sm">{benefit.text}</span>
                    </div>
                    {benefit.tooltipInfo && (
                      <Tooltip text={benefit.tooltipInfo}>
                        <InfoCircle />
                      </Tooltip>
                    )}
                  </li>
                  {index < pricing.benefits.length - 1 && (
                    <hr className="border-t border-zinc-100" />
                  )}
                </React.Fragment>
              ))}
            </ul>
            <a
              href="#"
              className="bg-gradient-to-r from-[#35fa32] via-[#2fe22c] to-[#35fa32] text-white font-semibold rounded-xl text-sm px-5 py-2.5 text-center"
            >
              Elegir
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
