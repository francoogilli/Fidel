import AppIcon from "../icons/app";
import ChevronIcon from "../icons/chevron";
import StargoldIcon from "../icons/stargold";

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col max-w-5xl lg:pt-3 space-y-6">
      <div className="lg:px-20 text-center">
        <div className="flex justify-center ">
          <img
            src="/fidel1.svg"
            className="hover:scale-105 transition-transform duration-500"
            width={200}
          />
        </div>
        <div className="bg-neutral-800/5 rounded-3xl px-4 py-2 mb-2 inline-block">
          <p className="text-[10px] flex justify-center items-center space-x-1.5 lg:text-xs uppercase tracking-widest bg-gradient-to-r from-[#22b920] via-[#31e82e] to-[#e08608] bg-clip-text text-transparent font-semibold">
            <AppIcon /> <span>Sistema de gestion y facturacion</span>
          </p>
        </div>
        <h2 className="font-bold lg:text-6xl text-4xl lg:leading-[4.6rem]">
          Organiza y gestiona tu empresa con{" "}
          <span className="bg-gradient-to-r from-[#2fe22c] via-[#35fa32] to-[#ff9500] bg-clip-text text-transparent">
            Fidel
          </span>
        </h2>
      </div>
      <div className="text-center lg:px-44 ">
        <h4 className="lg:text-[15px] text-[11px]">
          Descubri cómo Fidel puede llevar tu negocio al siguiente nivel.
          Nuestra plataforma innovadora está diseñada para optimizar la gestión
          de tu empresa, haciéndola más eficiente y productiva.
        </h4>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row lg:space-x-3.5 mx-auto justify-center items-center text-center space-y-2 lg:space-y-0">
          <button className="bg-zinc-800 hover:scale-105 duration-500 hover:bg-[#141414] pl-4 px-2 py-2 text-sm text-white rounded-3xl flex items-center space-x-2">
            <span>Ingresar ahora</span>
            <span className="bg-[#fffbf2] rounded-full p-2 hover:scale-110 duration-500">
              <ChevronIcon />
            </span>
          </button>
          <button className="font-medium text-black border hover:scale-105 duration-500 border-zinc-100 bg-gradient-to-r from-[#35fa32]  via-[#35fa32] to-[#ff9500] px-6 py-3 text-sm rounded-3xl flex items-center space-x-2">
            <span>¡Pedi una demo!</span>
          </button>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center pt-7 lg:space-x-2.5 space-y-3 lg:space-y-0">
          <img src="/people.svg" width={125} alt="" />
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex space-x-0.5">
              <StargoldIcon />
              <StargoldIcon />
              <StargoldIcon />
              <StargoldIcon />
              <StargoldIcon />
            </div>
            <p className="text-[11px] font-normal text-center lg:text-left">
              Amada por +2300 usuarios
            </p>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:flex top-0 left-0 w-full h-full justify-center items-center pointer-events-none -z-10">
        <div
          className="absolute top-52 left-52 flex justify-center items-center rounded-full"
          style={{ animation: "levitate 20s ease 1s infinite" }}
        >
          <img src="/image4.svg" width={90} className="select-none" alt="" />
        </div>
        <div
          className="absolute top-36 right-60 flex justify-center items-center rounded-full"
          style={{ animation: "levitate 22s ease 1s infinite" }}
        >
          <img src="/image2.svg" width={90} className="select-none" alt="" />
        </div>
        <div
          className="absolute top-[33rem] right-60 flex justify-center items-center rounded-full"
          style={{ animation: "levitate 21s ease 1s infinite" }}
        >
          <img src="/image3.svg" width={90} className="select-none" alt="" />
        </div>
        <div
          className="absolute top-[33rem] left-60 flex justify-center items-center rounded-full"
          style={{ animation: "levitate 19s ease 1s infinite" }}
        >
          <img src="/image1.svg" width={75} className="select-none" alt="" />
        </div>
      </div>
    </div>
  );
}
