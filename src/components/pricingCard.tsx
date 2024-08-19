import React from "react";
import Check from "../icons/checkIcon";
import CreditCardIcon from "../icons/creditCard";
import Cross from "../icons/cross";
import InfoCircle from "../icons/infoCircle";
import Tooltip from "./tooltip";
import { pricingData } from "../data/data";
import { Link } from "react-router-dom";

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
            Planes pensados para cada tipo de
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
          <div className="flex justify-center">
            <div className="flex items-center rounded-3xl border border-[#e9e9e9] px-3 py-1 animation-1">
              <CreditCardIcon className="size-4 md:size-5" />
              <h2
                className="text-xs md:text-sm font-medium text-center ml-2"
                style={{ fontFamily: "Satoshi" }}
              >
                Planes
              </h2>
            </div>
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
            className="text-center text-sm md:text-lg text-[#5c5c5c] font-medium w-[16rem] md:w-[21rem] mx-auto pb-0 md:pb-9"
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
                      {benefit.active ? <Check /> : <Cross />}
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
              className="flex justify-center tracking-wide items-center gap-x-1 bg-[#5fff5c] text-[#2d2d2d] font-semibold rounded-2xl text-sm px-5 py-2.5 text-center border-4 border-[#fff] hover:border-[#c9ffc8] transition-all duration-700"
            >
              Elegir
            </a>
          </div>
        ))}
      </div>
      {viewComparison && (
        <Link to="/plans">
          <button
            className="bg-[#fafafa] mt-10 tracking-tighter mx-auto md:tracking-normal text-[#171717] justify-center w-auto font-bold py-2.5 px-6 md:px-7 md:py-2.5 text-lg md:text-[15px] rounded-[18px]  flex items-center space-x-2 border-4 border-[#ffffff] hover:border-[#f6f6f6] transition-all duration-700"
            style={{ fontFamily: "Satoshi" }}
          >
            Ver comparacion
          </button>
        </Link>
      )}
    </div>
  );
}
