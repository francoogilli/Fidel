import React from "react";
import Check from "../icons/checkIcon";
import CreditCardIcon from "../icons/creditCard";
import Cross from "../icons/cross";
import InfoCircle from "../icons/infoCircle";
import Tooltip from "./tooltip";
import { pricingData } from "../data/data";
import ThreeStripesRight from "../icons/threeStripesRight";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import GradientLine from "./gradientLine";
import ThunderIcon from "../icons/thunder";
import AdvantagesIcon from "../icons/advantages";
import ChartIcon from "../icons/chart";
import StonksIcon from "../icons/stonks";
import ModulesIcon from "../icons/modules";

interface Props {
  viewComparison?: boolean;
}
export default function PricingCard({ viewComparison }: Props) {
  return (
    <div className="max-w-7xl mx-auto mt-32 mb-10 px-4 space-y-7">
      {!viewComparison ? (
        <>
          <h3
            className="animation-1 text-4xl mx-auto w-[20rem] md:w-[50rem] md:leading-[4rem] md:text-[3.45rem] font-bold text-center my-8 pb-1 tracking-tight"
            style={{ fontFamily: "Satoshi" }}
          >
            Planes para cada tipo de
            <span
              className="italic text-4xl md:text-[3.45rem] tracking-wide"
              style={{ fontFamily: "instrument-serif" }}
            >
              {" "}
              negocio.
            </span>
          </h3>
          <h4
            className="text-center text-sm md:text-lg text-[#5c5c5c] font-medium w-[20rem] md:w-[40rem] mx-auto pb-0 md:pb-9"
            style={{ fontFamily: "Satoshi" }}
          >
            Hemos diseñado atentamente nuestros planes de precios para que se
            ajusten a las necesidades específicas de tu negocio, ofreciéndote
            flexibilidad y valor en cada etapa de tu crecimiento.
          </h4>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center gap-x-2.5">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#333333] px-4 py-2 animation-1">
              <CreditCardIcon className="size-4 md:size-5 text-[#f5f5f5]" />
              <h2
                className="text-xs md:text-sm font-medium text-center ml-2 text-[#f5f5f5]"
                style={{ fontFamily: "Satoshi" }}
              >
                Planes
              </h2>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>
          <h3
            className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
            style={{ fontFamily: "Satoshi" }}
          >
            Precios que tienen
            <span
              className="italic text-4xl md:text-[3.25rem] tracking-wide"
              style={{ fontFamily: "instrument-serif" }}
            >
              {" "}
              sentido.
            </span>
          </h3>
          <h4
            className="animation-1 text-center text-sm md:text-lg text-[#5c5c5c] font-medium w-[16rem] md:w-[21rem] mx-auto pb-0 md:pb-9"
            style={{ fontFamily: "Satoshi" }}
          >
            Diseñamos nuestros precios para que se adapten a tu negocio.
          </h4>
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {pricingData.map((pricing) => (
          <div
            className="flex flex-col p-6 text-center rounded-3xl border border-[#ededed]"
            key={pricing.name}
          >
            <h3 className="text-3xl text-left font-semibold text-[#212121]">
              {pricing.name}
            </h3>
            <p className="font-light text-zinc-500 text-[10px] sm:text-xs text-left">
              Para {pricing.bestOption}
            </p>
            <div className="flex justify-start text-left text-[#212121] items-baseline my-5">
              <span className="text-5xl font-semibold">
                ${Number(pricing.price).toLocaleString("en-US")}
              </span>
              <span className="font-light text-zinc-500 sm:text-xs text-left">
                /mes
              </span>
            </div>
            <hr className="flex-grow border-t border-zinc-200 mb-5" />
            <p className="font-light text-zinc-500 sm:text-xs text-left pb-3">
              ¿Qué incluye?
            </p>
            <ul role="list" className="mb-7 space-y-2.5 text-left">
              {pricing.benefits.map((benefit, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center space-x-2 justify-between">
                    <div className="flex items-center space-x-2">
                      {benefit.active ? (
                        <Check className="bg-gradient-to-b from-[#b7ff33] to-[#dbff99] rounded-md p-1" />
                      ) : (
                        <Cross />
                      )}
                      <span className="text-sm">{benefit.text}</span>
                    </div>
                    {benefit.tooltipInfo && (
                      <Tooltip text={benefit.tooltipInfo} hideOnSmallScreens>
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
              href="/"
              style={{ fontFamily: "Satoshi" }}
              className="flex justify-center tracking-wide items-center gap-x-1 bg-[#74fc72] text-[#2d2d2d] font-semibold rounded-2xl text-sm px-5 py-2.5 text-center border-4 border-[#fff] hover:border-[#d9fed8] transition-all duration-700"
            >
              Elegir
            </a>
          </div>
        ))}
      </div>
      <div className="animation-1">
        <div className="flex justify-center items-center gap-x-2.5 pt-4 pb-8">
          <GradientLine from="#5b5b5b" direction="left" />
          <ThreeStripesLeft />
          <h4
            className="text-lg px-5 text-[#4e4e4e] font-semibold"
            style={{ fontFamily: "Satoshi" }}
          >
            Incluido en todos los planes
          </h4>
          <ThreeStripesRight />
          <GradientLine from="#5b5b5b" direction="right" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-x-2">
          <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-full">
            <ThunderIcon className="size-6" strokeWidth="1.5" />
            <span className="text-sm text-[#2c2c2c] font-medium">
              Atención al cliente
            </span>
          </div>
          <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-full">
            <StonksIcon className="size-6" strokeWidth="1.7" />
            <span className="text-sm text-[#2c2c2c] font-medium">
              Sin límite de ventas.
            </span>
          </div>
          <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-full">
            <ChartIcon className="size-6" strokeWidth="1.7" />
            <span className="text-sm text-[#2c2c2c] font-medium">
              Analítica básica
            </span>
          </div>
          <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-full">
            <ModulesIcon className="size-6" strokeWidth="1.6" />
            <span className="text-sm text-[#2c2c2c] font-medium">
              Clientes, Ventas y Productos
            </span>
          </div>
          <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-full">
            <AdvantagesIcon className="size-6" strokeWidth="1.6" />
            <span className="text-sm text-[#2c2c2c] font-medium">
              Actualizaciones gratuitas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
