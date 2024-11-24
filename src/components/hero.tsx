import { useState } from "react";
import { Link } from "react-router-dom";
import SparklesIcon from "../icons/sparkles";
import CreditCardIcon from "../icons/creditCard";
import PlayIcon from "../icons/play";
import Modal from "./modal";
import CarouselInfinite from "./carouselInfinite";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl pt-40 lg:pt-14 space-y-6 px-4 lg:px-4 pb-10">
        {/* <div className="absolute top-28 left-0 right-0 flex justify-center">
        <div className="text-sm font-medium bg-gradient-to-br from-[#fefffd] to-[#F8F9FA] border border-[#e6eee6] pr-2.5 mb-0 md:mb-0 lg:mb-10 inline-block rounded-3xl">
          <div className="flex justify-center items-center text-xs text-[#1f1f1f] gap-x-2 p-[3px]">
            <div className="bg-gradient-to-tr from-[#63ff33] to-[#b3ff99] p-1.5 rounded-full">
              <CalendarIcon className="size-[17px]" strokeWidth="2" />
            </div>
            ¡Novedades cada dos semanas!
          </div>
        </div>
      </div> */}

        <div className="flex-1  text-center lg:text-left pt-0 md:pt-[0rem] lg:pt-[3.1rem]">
          <h2
            className="font-bold text-4xl md:text-6xl lg:text-[5rem] lg:leading-[1.1em] tracking-tighter"
            style={{ fontFamily: "Satoshi" }}
          >
            Organiza tu empresa, en un{" "}
            <span
              className="tracking-normal"
              style={{ fontFamily: "instrument-serif" }}
            >
              solo lugar
            </span>
          </h2>

          <div className="lg:px-0 mt-4 mx-auto md:ml-0 w-[23rem] md:w-[36rem]">
            <h4
              className="text-[#5c5c5c] lg:w-auto mx-auto lg:mx-0 text-base lg:text-lg leading-[1.4em] font-medium"
              style={{ fontFamily: "Satoshi" }}
            >
              Optimiza cada operación y toma decisiones más inteligentes para
              impulsar la gestión de tu negocio. Potencia tus procesos para
              llevar tu empresa más lejos.
            </h4>
          </div>

          <div className="mt-6">
            <div className="flex flex-col md:flex-row md:space-x-3 mx-auto lg:mx-0 justify-center lg:justify-start items-center text-center space-y-2 md:space-y-0">
              <button
                className="bg-[#5fff5c] tracking-tighter md:tracking-normal text-[#171717] justify-center w-auto gap-2 font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#fafafa] hover:border-[#dfffdf] transition-all duration-700"
                style={{ fontFamily: "Satoshi" }}
              >
                <SparklesIcon className="size-4 md:size-5" />
                Empezar ahora
              </button>
              <Link to="/plans">
                <button
                  className="bg-[#fafafa] tracking-tighter md:tracking-normal text-[#171717] gap-2 justify-center w-auto font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#ffffff] md:border-[#fafafa] hover:border-[#f6f6f6] transition-all duration-700"
                  style={{ fontFamily: "Satoshi" }}
                >
                  <CreditCardIcon className="size-4 md:size-5" />
                  Conocer planes
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="relative flex-1 flex justify-center lg:justify-end items-center group">
          <img
            src="/image.png"
            alt="Laptop"
            className="border-[10px] border-[#a7faa5] md:mt-11 w-[100%] rounded-[2.5rem] transition-colors duration-300 group-hover:border-[#79f277]"
          />
          <button
            onClick={openModal}
            className="absolute inset-0 flex justify-center mt-0 md:mt-11 items-center"
          >
            <div className="bg-[#6fff6d] hover:bg-[#43fc40] border-[7px] border-[#dcffdb] hover:border-[#e6ffe6] p-4 rounded-full shadow-xl hover:shadow-2xl duration-500 transition-all">
              <PlayIcon className="size-8 md:size-12 pl-0.5 text-white" />
            </div>
          </button>
        </div>
        {/* Modal con video de YouTube */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoUrl="https://www.youtube.com/embed/WO2b03Zdu4Q?autoplay=1"
        />
      </div>
      <h4
        className="text-center text-sm md:text-base font-medium text-[#1b1b1b] pb-4"
        style={{ fontFamily: "Satoshi" }}
      >
        Conoce nuestras funcionalidades
      </h4>
      <CarouselInfinite />
    </>
  );
}
