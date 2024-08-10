import AppIcon from "../icons/app";

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col max-w-5xl lg:pt-3 space-y-6 px-4 lg:px-1 pb-10">
      <div className="lg:px-20 text-center pt-[4.8rem]">
        <div className="flex justify-center ">
          <img
            src="/fidel1.svg"
            className="hover:scale-105 transition-transform duration-500"
            width={110}
          />
        </div>
        <div className="bg-gradient-to-br from-[#fbfbfb] to-[#fff] border border-[#ffebeb] rounded-3xl px-4 py-2 mb-2 inline-block">
          <p className="text-[10px] flex justify-center items-center space-x-1.5 lg:text-xs uppercase tracking-widest bg-gradient-to-r from-[#22b920] via-[#31e82e] to-[#e08608] bg-clip-text text-transparent font-semibold">
            <AppIcon /> <span>Sistema de gestion y facturacion</span>
          </p>
        </div>
        <h2 className="font-bold md:text-6xl lg:text-7xl text-4xl lg:leading-[4.6rem]">
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
        <div className="flex flex-col md:flex-row md:space-x-3 mx-auto justify-center items-center text-center space-y-2 md:space-y-0">
          <button className="bg-zinc-800 justify-center w-full md:w-auto hover:scale-105 duration-500 hover:bg-[#141414] py-4 px-7 md:py-3 text-sm text-white rounded-2xl flex items-center space-x-2">
            Empezar ahora
          </button>
          <button className="font-medium text-black border w-full md:w-auto justify-center hover:scale-105 duration-500 border-zinc-100 bg-[#35fa32] px-6 py-4 md:py-3 text-sm rounded-2xl flex items-center space-x-2">
            <span>¡Pedi una demo!</span>
          </button>
        </div>
      </div>
    </div>
  );
}
