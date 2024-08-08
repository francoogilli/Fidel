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
        <div className="flex items-center rounded-xl border border-[#e9e9e9] bg-gradient-to-br from-[#f5f5f5] to-[#fff] px-3 py-1">
          <CreditCardIcon />
          <h2 className="text-base font-medium text-center ml-2">Precios</h2>
        </div>
      </div>
      <h3 className="animation-1 text-4xl md:text-5xl font-semibold text-center my-8 pb-4" style={{ fontFamily: "Outfit Variable" }}>
        Planes{" "}
        <span className="bg-gradient-to-r from-[#2fe22c] via-[#35fa32] to-[#ff9500] bg-clip-text text-transparent tracking-tight">
          únicos
        </span>{" "}
        para cada negocio.
      </h3>
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
