import { useState } from "react";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import UsersGroup from "../icons/user-group";
import GradientLine from "./gradientLine";
import Carousel from "./carrousel";

const slideTexts = [
  "Texto para la imagen 1",
  "Texto para la imagen 2",
  "Texto para la imagen 3",
  "Texto para la imagen 4",
  "Texto para la imagen 5",
];

export default function Customers() {
  const [activeText, setActiveText] = useState(slideTexts[0]);

  const handleSlideChange = (index: number) => {
    setActiveText(slideTexts[index]);
  };

  return (
    <div className="max-w-7xl mb-8 mx-auto px-4 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#333333] px-4 py-2 animation-1">
          <UsersGroup className="size-5 text-[#f5f5f5]" />
          <h2
            className="text-xs md:text-sm font-medium text-center ml-2 text-[#f5f5f5]"
            style={{ fontFamily: "Satoshi" }}
          >
            Clientes
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-5">
        <div className="md:col-span-5 col-span-12 order-2 md:order-1 border-[8px] border-[#a7faa5] hover:border-[#79f277] rounded-[1.8rem] duration-300">
          <Carousel onSlideChange={handleSlideChange} />
        </div>
        <div className="md:col-span-7 col-span-12 order-1 md:order-2 px-10">
          <h3
            className="text-3xl md:text-5xl leading-[3.5rem] font-bold"
            style={{ fontFamily: "Satoshi" }}
          >
            {activeText}
          </h3>
          <h4 className="pt-3 md:pt-7 md:text-base text-sm text-[#5c5c5c]">
            Únete a cientos de empresas que, día a día, optimizan su gestión con
            Fidel, logrando una administración mucho más simplificada y centrada
            en resultados.
          </h4>
        </div>
      </div>
    </div>
  );
}
