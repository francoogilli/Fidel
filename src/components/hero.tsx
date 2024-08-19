import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col max-w-5xl pt-40 lg:pt-14 space-y-6 px-4 lg:px-1 pb-10">
      <div className="lg:px-20 text-center pt-[4.8rem]">
        <div
          className="text-sm font-medium bg-white mb-7 md:mb-10 inline-block rounded-3xl border border-[#e9e9e9] px-3 py-1"
          style={{ fontFamily: "Satoshi" }}
        >
          <div className="flex justify-center items-center space-x-2">
            <span className="inline-block size-2 bg-[#80ff18] rounded-full animate-pulse"></span>
            <p>¡Mejoras y novedades cada dos semanas!</p>
          </div>
        </div>

        <h2
          className="font-bold text-4xl md:text-6xl lg:text-[5rem] lg:leading-[1.1em] tracking-tighter"
          style={{ fontFamily: "Satoshi" }}
        >
          Organiza y gestiona tu empresa, en un{" "}
          <span
            className="tracking-normal"
            style={{ fontFamily: "instrument-serif" }}
          >
            solo lugar
          </span>
        </h2>
      </div>
      <div className="text-center lg:px-44 ">
        <h4
          className="text-[#5c5c5c] w-[23rem] md:w-[42rem] mx-auto text-base lg:text-xl leading-[1.4em] font-medium"
          style={{ fontFamily: "Satoshi" }}
        >
          Optimiza cada operación y toma decisiones más inteligentes para
          impulsar la gestión de tu negocio. Potencia tus procesos para llevar tu empresa más lejos.
        </h4>
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:space-x-3 mx-auto justify-center items-center text-center space-y-2 md:space-y-0">
          {/* <button className="bg-[#35fa32] text-[#171717] justify-center w-full md:w-auto font-bold py-4 px-7 md:py-3 text-[15px]  rounded-[18px]  flex items-center space-x-2 border-4 border-[#ffffff] hover:border-[#eaeaea] transition-all duration-700" style={{ fontFamily: "Satoshi" }}>
            Empezar ahora
          </button> */}
          <button
            className="bg-[#5fff5c] tracking-tighter md:tracking-normal text-[#171717] justify-center w-auto font-bold py-2.5 px-6 md:px-7 md:py-2.5 text-base md:text-[15px] rounded-[18px]  flex items-center space-x-2 border-4 md:border-[5px] border-[#ffffff] hover:border-[#c9ffc8] transition-all duration-700"
            style={{ fontFamily: "Satoshi" }}
          >
            Empezar ahora
          </button>
          <Link to="/plans">
            <button
              className="bg-[#fafafa] tracking-tighter md:tracking-normal text-[#171717] justify-center w-auto font-bold py-2.5 px-6 md:px-7 md:py-2.5 text-base md:text-[15px] rounded-[18px]  flex items-center space-x-2 border-4 md:border-[5px] border-[#ffffff] hover:border-[#f6f6f6] transition-all duration-700"
              style={{ fontFamily: "Satoshi" }}
            >
              Conocer planes
            </button>
          </Link>
          {/* <button className="font-medium text-black w-full md:w-auto justify-center bg-[#35fa32] px-6 py-4 md:py-3 text-sm rounded-2xl flex items-center space-x-2 border-4 border-[#ffffff] hover:border-[#eeeeee] transition-all duration-700">
            <span>¡Pedi una demo!</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
