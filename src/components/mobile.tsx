import CheckIcon from "../icons/check";
import MobileIcon from "../icons/mobile";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";

export default function Mobile() {
  return (
    <div className="max-w-7xl mb-8 mx-auto px-3 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20">
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#333333] px-4 py-2 animation-1">
          <MobileIcon className="size-4 md:size-4 text-[#f5f5f5]" />
          <h2
            className="text-xs md:text-sm font-medium text-center ml-2 text-[#f5f5f5]"
            style={{ fontFamily: "Satoshi" }}
          >
            Aplicacion Movil
          </h2>
        </div>
        <ThreeStripesRight />
      </div>
      <div className="flex mx-auto justify-center items-center">
        <h3
          className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
          style={{ fontFamily: "Satoshi" }}
        >
          Maneja tu{" "}
          <span
            className="italic text-4xl md:text-[3.25rem] tracking-wide"
            style={{ fontFamily: "instrument-serif" }}
          >
            negocio{" "}
          </span>
          desde tu celular
        </h3>
      </div>
      <h4
        className="animation-1 text-center text-sm md:text-lg text-[#5c5c5c] font-medium md:w-[50%] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
      >
        Controla y toma decisiones desde la comodidad de tu celular. Conecta con
        cada aspecto de tu negocio, estés donde estés, a cualquier hora.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-12 relative pt-10">
        <div className="col-span-6 relative hidden md:block">
          {/* Imagen de fondo */}
          <img
            src="fondo.png"
            alt=""
            style={{ width: "600px", height: "500px" }}
            className="absolute z-0 rounded-2xl"
          />
          {/* Imagen encima del fondo */}
          <img
            width={600}
            src="cositas.svg"
            alt=""
            className="p-10 relative z-10"
          />
          <div className="absolute flex justify-center -top-5 right-0 transition-all duration-300">
            <img src="papelitoderecho.png" className="w-16" alt="" />
          </div>
          <div className="absolute flex justify-center -top-5 -left-6 transition-all duration-300">
            <img src="papelitoizquierdo.png" className="w-16" alt="" />
          </div>
          {/* Imagen del celular encima de todo */}
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <img
              src="phone.png"
              alt="Imagen de celular"
              width={500}
              className="overflow-hidden"
            />
          </div>
        </div>
        <div className="col-span-6 md:hidden flex justify-center items-center mx-auto">
          <img
            src="mobileimage.png"
            alt="Imagen para móviles"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-6">
          <div className="hidden md:block">
            <h3
              className="text-3xl md:text-5xl text-[#252525] font-bold my-8 pb-0 md:pb-1 tracking-tight"
              style={{ fontFamily: "Satoshi" }}
            >
              Gestiona tu
              <span
                className="italic tracking-wide"
                style={{ fontFamily: "instrument-serif" }}
              >
                {" "}
                empresa{" "}
              </span>
              desde donde vos quieras.
            </h3>

            <p className="text-[#565656] text-sm md:text-base">
              Fidel te ofrece acceso instantáneo a toda la información clave de
              tu negocio. Desde la facturación hasta el control de inventario.
              Simplifica la gestión, mejora la eficiencia, y mantén el control
              total desde la comodidad de tu celular.
            </p>
          </div>
          <div className="pt-0 md:pt-5">
            <div className="inline-flex text-[#2b2b2b] text-xs md:text-sm justify-start border border-[#E6E9EE] items-center mt-2 rounded-full px-2 py-1.5 gap-x-2">
              <CheckIcon className="size-6 mb-0.5 rounded-full bg-gradient-to-b from-[#b7ff33] to-[#dbff99] p-1 text-black" />
              <span className="pr-2">
                Acceso en cualquier lugar y en cualquier momento.
              </span>
            </div>
            <div className="inline-flex text-[#2b2b2b] text-xs md:text-sm justify-start border border-[#E6E9EE] items-center mt-2 rounded-full px-2 py-1.5 gap-x-2">
              <CheckIcon className="size-6 mb-0.5 rounded-full bg-gradient-to-b from-[#b7ff33] to-[#dbff99] p-1 text-black" />
              <span className="pr-2">
                Visualiza todos tus datos o información en tiempo real.
              </span>
            </div>
            <div className="inline-flex text-[#2b2b2b] text-xs md:text-sm justify-start border border-[#E6E9EE] items-center mt-2 rounded-full px-2 py-1.5 gap-x-2">
              <CheckIcon className="size-6 mb-0.5 rounded-full bg-gradient-to-b from-[#b7ff33] to-[#dbff99] p-1 text-black" />
              <span className="pr-2">
                Realiza pedidos directamente desde cualquier lugar
              </span>
            </div>
            <div className="inline-flex text-[#2b2b2b] text-xs md:text-sm justify-start border border-[#E6E9EE] items-center mt-2 rounded-full px-2 py-1.5 gap-x-2">
              <CheckIcon className="size-6 mb-0.5 rounded-full bg-gradient-to-b from-[#b7ff33] to-[#dbff99] p-1 text-black" />
              <span className="pr-2">
                Consulta el stock y precios de tus productos al instante.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
