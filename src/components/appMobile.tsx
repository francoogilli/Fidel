import Apple from "../icons/apple";
import MobileIcon from "../icons/mobile";
import PlayStore from "../icons/playstore";

export default function AppMobile() {
  return (
    <>
      <div className="flex justify-center pt-20">
        <div className="flex items-center rounded-lg border border-[#e9e9e9] px-3 py-1 animation-1">
          <MobileIcon className="size-4 md:size-4 text-[#181818]" />
          <h2
            className="text-xs md:text-sm font-medium text-center ml-2"
            style={{ fontFamily: "Satoshi" }}
          >
            App Movil
          </h2>
        </div>
      </div>
      <div className="bg-gradient-to-t md:bg-gradient-to-br overflow-hidden from-[#4fff0f2f] via-[#44ff00a7] to-[#4fff0f2f] max-w-[78.5rem] mx-4 xl:mx-auto mt-10 mb-10 px-4 space-y-7 rounded-3xl">
        <div className="grid grid-cols-12 p-2 md:p-10">
          <div className="col-span-12 pt-4 md:pt-0 md:col-span-6 flex flex-col">
            {/* Mover el título arriba en mobile */}
            <h2
              className="text-4xl md:text-7xl text-center font-semibold text-[#000000] mb-1 md:mb-0"
              style={{ fontFamily: "Satoshi" }}
            >
              <span style={{ fontFamily: "instrument-serif" }}>Maneja</span> tu
              negocio desde tu <span className="text-[#ffffff]">celular.</span>
            </h2>

            {/* Contenedor para los botones, abajo en mobile */}
            <div className="flex flex-col md:flex-row pt-6 md:pt-10 gap-x-4 px-10">
              <div className="flex flex-col justify-center w-full space-y-3">
                <a
                  key="appLink"
                  href="#"
                  target="_blank"
                  className="flex justify-center items-center bg-[#222222] hover:bg-[#181818] text-white space-x-3 py-3 px-8 rounded-2xl duration-300"
                >
                  <Apple className="size-8 md:size-9 fill-[#ffffff]" />
                  <div className="flex flex-col items-start">
                    <h3 className="text-xs md:text-sm font-medium text-white">
                      Disponible en
                    </h3>
                    <p className="text-sm md:text-lg font-semibold">
                      App Store
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex flex-col justify-center w-full space-y-3 mt-2 md:mt-0">
                <a
                  key="appLink"
                  href="#"
                  target="_blank"
                  className="flex justify-center items-center bg-[#222222] hover:bg-[#181818] text-white space-x-3 py-3 px-8 rounded-2xl duration-300"
                >
                  <PlayStore className="size-8 fill-white" />
                  <div className="flex flex-col items-start">
                    <h3 className="text-xs md:text-sm font-medium text-[#ffffff]">
                      Disponible en
                    </h3>
                    <p className="text-sm md:text-lg font-semibold text-white">
                      Play Store
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Imagen en la segunda columna, se oculta en mobile */}
          <div className="col-span-6 relative p-1 pt-28 md:p-10">
            <img
              src="iphone4.png"
              alt="Moneda"
              draggable="false"
              className="select-none absolute w-[16.5rem] drop-shadow-2xl top-1 -right-20 md:-top-4 md:right-24 hover:scale-105 duration-700"
            />
          </div>
        </div>
      </div>
    </>
  );
}
