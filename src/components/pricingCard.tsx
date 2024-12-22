import React from "react";
import Check from "../icons/checkIcon";
import CreditCardIcon from "../icons/creditCard";
import InfoCircle from "../icons/infoCircle";
import Tooltip from "./tooltip";
import { pricingData } from "../data/data";
import ThreeStripesRight from "../icons/threeStripesRight";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import GradientLine from "./gradientLine";
import ThunderIcon from "../icons/thunder";
import StonksIcon from "../icons/stonks";
import ModulesIcon from "../icons/modules";
import CashIcon from "../icons/cash";
import CalendarIcon from "../icons/calendar";
import StarGoldIcon from "../icons/stargold";
import DoubleChevron from "../icons/doubleChevron";

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
                Precios
              </h2>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>
          <h3
            className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
            style={{ fontFamily: "Satoshi" }}
          >
            Planes que tienen
            <span className="text-4xl md:text-[3.25rem] bg-gradient-to-r from-[#000000] to-[#323232] bg-clip-text text-transparent">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingData.map((pricing) => (
          <div
            className="flex flex-col px-6 pt-4 text-center rounded-3xl border border-[#e5e5e5]"
            key={pricing.name}
          >
            <div className="bg-[#f8fcfa] border-b border-[#e5e5e5] px-6 py-5 -mx-6 -mt-4 rounded-t-3xl">
              <div className="flex justify-start items-center space-x-2.5">
                {pricing.iconPro && (
                  <StarGoldIcon className="size-5 md:size-6 text-[#efeb23]" />
                )}
                <h3
                  className="text-lg text-left tracking-wide font-semibold text-[#212121]"
                  style={{ fontFamily: "Satoshi" }}
                >
                  {pricing.name}
                </h3>
              </div>
              <div className="flex justify-start text-left text-[#212121] items-baseline my-3">
                <span
                  className="text-5xl font-semibold"
                  style={{ fontFamily: "Satoshi" }}
                >
                  ${Number(pricing.price).toLocaleString("en-US")}
                </span>
                <span
                  className="font-semibold text-[#454545] sm:text-xs text-left"
                  style={{ fontFamily: "Satoshi" }}
                >
                  /mes
                </span>
              </div>
              <h5
                className="text-sm font-medium text-left text-[#212121]"
                style={{ fontFamily: "Satoshi" }}
              >
                Para {pricing.bestOption}
              </h5>
            </div>

            {/* <hr className="flex-grow border-t border-zinc-200 mb-5" /> */}
            <p className="font-medium text-[#343434] sm:text-sm text-left pb-3 pt-3">
              Incluye
            </p>
            <ul role="list" className="mb-5 space-y-2.5 text-left">
              {pricing.benefits.map((benefit, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center space-x-2 justify-between">
                    <div className="flex items-center space-x-2">
                      {benefit.active ? (
                        <Check className="bg-gradient-to-b from-[#63ff33] to-[#b3ff99] rounded-full p-1" />
                      ) : (
                        <Check className="bg-gradient-to-tr from-[#f5f5f5] to-[#ffffff] rounded-full p-1" />
                      )}
                      <span
                        className={`text-sm ${
                          !benefit.active ? "line-through text-zinc-900" : ""
                        }`}
                      >
                        {benefit.text}
                      </span>
                    </div>
                    {benefit.tooltipInfo && (
                      <Tooltip text={benefit.tooltipInfo} hideOnSmallScreens>
                        <InfoCircle />
                      </Tooltip>
                    )}
                  </li>
                  {index < pricing.benefits.length - 1 && (
                    <hr className="border-t border-white" />
                  )}
                </React.Fragment>
              ))}
              <a
                href="/"
                style={{ fontFamily: "Satoshi", marginTop: "27px" }}
                className="flex justify-center tracking-wide  items-center gap-x-1 bg-gradient-to-tr from-[#000000ef] to-[#383838ee] text-[#fff] font-medium rounded-2xl text-sm px-5 py-2.5 text-center border-4 border-[#F8FAFC] hover:border-[#e0e0e0] transition-all duration-700"
              >
                Empezar
                <DoubleChevron className="size-4" strokeWidth="2.2" />
              </a>
            </ul>
          </div>
        ))}
      </div>
      {viewComparison ? (
        <div className="animation-1">
          <div className="flex justify-center items-center gap-x-2.5 pt-4 pb-8">
            <GradientLine from="#f8f8f8" direction="left" />
            <ThreeStripesLeft />

            <h4
              className="text-lg px-5 text-[#4e4e4e] font-semibold"
              style={{ fontFamily: "Satoshi" }}
            >
              Todos los planes incluyen
            </h4>
            <ThreeStripesRight />
            <GradientLine from="#f8f8f8" direction="right" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2.5 md:gap-x-2">
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <ThunderIcon className="size-6" strokeWidth="1.5" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Atención al cliente
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <StonksIcon className="size-6" strokeWidth="1.7" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Ventas sin límites
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <CashIcon className="size-6" strokeWidth="1.7" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Caja y Ventas
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <ModulesIcon className="size-6" strokeWidth="1.6" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Clientes y Productos
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <CalendarIcon className="size-6" strokeWidth="1.6" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Actualizaciones
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h4
            className="text-3xl mx-auto w-[20rem] md:w-[40rem] md:text-5xl font-bold text-center md:pt-14 pb-1 tracking-tight"
            style={{ fontFamily: "Satoshi" }}
          >
            Compara y explora las características de cada plan
          </h4>
        </>
      )}
    </div>
  );
}
