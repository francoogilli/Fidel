import CreditCardIcon from "../icons/creditCard";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export default function Functionalities() {
  return (
    <>
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
              Funcionalidades
            </h2>
          </div>
          <ThreeStripesRight />
          <GradientLine direction="right" />
        </div>
        <h3
          className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
          style={{ fontFamily: "Satoshi" }}
        >
          Hace
          <span
            className="italic text-4xl md:text-[3.25rem] tracking-wide"
            style={{ fontFamily: "instrument-serif" }}
          >
            {" "}
            todo
          </span>
          {" "} en un mismo lugar.
        </h3>
        {/* <h4
          className="animation-1 text-center text-sm md:text-lg text-[#5c5c5c] font-medium w-[16rem] md:w-[21rem] mx-auto pb-0 md:pb-9"
          style={{ fontFamily: "Satoshi" }}
        >
          Diseñamos nuestros precios para que se adapten a tu negocio.
        </h4> */}
      </>
    </>
  );
}
