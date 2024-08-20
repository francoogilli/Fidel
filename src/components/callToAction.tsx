export default function CallToAction() {
  return (
    <div>
      <div className="flex items-center justify-center gap-x-1.5 pt-12 mr-1.5">
        <img src="/fidelnew.svg" className="size-16" alt="Logo de Fidel" />
        <h6
          className="text-[#1b1b1b] text-3xl font-semibold"
          style={{ fontFamily: "Satoshi" }}
        >
          Fidel
        </h6>
      </div>
      <div>
        <h3
          className="text-center text-[#1b1b1b] text-[34px] md:text-[66px] font-bold"
          style={{ fontFamily: "Satoshi" }}
        >
          Ordena tu negocio{" "}
          <span style={{ fontFamily: "instrument-serif" }}>hoy.</span>
        </h3>
        <h6
          className="text-center mx-auto text-base md:text-lg pt-1 w-[22rem] md:w-[30rem] font-medium text-[#717171]"
          style={{ fontFamily: "Satoshi" }}
        >
          Gestiona tus operaciones y ventas en un solo lugar y transforma tu
          empresa con Fidel.
        </h6>
        <button
          className="bg-[#5fff5c] mx-auto mt-4 md:mt-5 tracking-tighter md:tracking-normal text-[#171717] justify-center w-auto font-bold py-2.5 px-6 md:px-7 md:py-2.5 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#ffffff] hover:border-[#c9ffc8] transition-all duration-700"
          style={{ fontFamily: "Satoshi" }}
        >
          Empezar ahora
        </button>
      </div>
    </div>
  );
}
