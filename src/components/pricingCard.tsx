import React from "react";
import Check from "../icons/checkIcon";
import CreditCardIcon from "../icons/creditCard";
import Cross from "../icons/cross";
import InfoCircle from "../icons/infoCircle";
import Tooltip from "./tooltip";
import ArrowRight from "../icons/arrowRight";
import { pricingData } from "../data/data";

export default function PricingCard() {
  return (
    <div className="max-w-7xl mx-auto mt-32 mb-10 px-4 space-y-7">
      <div className="flex justify-center">
        <div className="flex items-center rounded-3xl border border-[#e9e9e9] px-3 py-1">
          <CreditCardIcon className="size-4 md:size-5" />
          <h2 className="text-xs md:text-sm font-medium text-center ml-2">Precios</h2>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {pricingData.map((pricing) => (
          <div
            className="flex flex-col p-6 text-center bg-gradient-to-br from-[#f7f7f7b9] to-[#fff] rounded-3xl border border-[#ededed]"
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
              href="#"
              className="flex justify-center items-center gap-x-1 bg-gradient-to-t from-[#2d2d2d] to-[#4a4a4a] text-white font-semibold rounded-xl text-sm px-5 py-2.5 text-center hover:scale-105 duration-300"
            >
              Elegir
              <ArrowRight className="size-[1.125rem]" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
