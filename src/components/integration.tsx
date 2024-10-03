import CheckboxIcon from "../icons/checkbox";
import IntegrationIcon from "../icons/integration";
import RefreshIcon from "../icons/refresh";
import ThunderIcon from "../icons/thunder";
import TiendaNubeIcon from "../icons/tiendaNube";

export default function Integration() {
  return (
    <div className="max-w-7xl mb-8 mx-auto px-4">
      <div className="flex justify-center pt-20">
        <div className="flex items-center rounded-lg bg-[#F8F9FA] border border-[#E6E9EE] px-3 py-1 animation-1">
          <IntegrationIcon className="size-4 rotate-90 -scale-x-100 text-[#333333]" />
          <h2
            className="text-xs md:text-sm font-medium text-center ml-2 text-[#333333]"
            style={{ fontFamily: "Satoshi" }}
          >
            Integraciones
          </h2>
        </div>
      </div>
      <div className="flex mx-auto justify-center items-center pb-2 md:pb-12">
        <h3
          className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
          style={{ fontFamily: "Satoshi" }}
        >
          Conecta fácil con tu
          <span
            className="italic text-4xl md:text-[3.25rem] tracking-wide"
            style={{ fontFamily: "instrument-serif" }}
          >
            {" "}
            tienda online
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 relative gap-x-5">
        <div className="col-span-6 relative hidden md:block border border-[#ffffff] rounded-3xl">
          <div className="absolute flex justify-center bg-[#fbfbfb] px-12 py-4 rounded-[2rem] hover:scale-105 top-5 left-16 transition-all duration-300">
            <TiendaNubeIcon className="size-28" fill="#212121" />
          </div>
          <div className="absolute flex justify-center rotate-[135deg] top-5 right-[14rem] transition-all duration-300">
            <img
              src="arrow.png"
              className="w-20 hover:scale-105 duration-300"
              alt=""
            />
          </div>
          <div className="absolute flex justify-center -rotate-[37deg] top-[11rem] left-[14.5rem] transition-all duration-300">
            <img
              src="arrow.png"
              className="w-20 hover:scale-105 duration-300"
              alt=""
            />
          </div>
          <div className="absolute flex justify-center bg-[#fbfbfb] px-12 py-4 rounded-[2rem] hover:scale-105 top-44 right-12 transition-all duration-300">
            <img
              src="woocommerce.svg"
              draggable="false"
              className="size-28"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 md:hidden flex justify-center items-center mx-auto">
          <img
            src="integrationimage.png"
            alt="Imagen para móviles"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-6 bg-gradient-to-br from-[#fcfef9] via-[#F8F9FA] to-[#fcfef9] border border-[#e6eee6] rounded-3xl px-6 py-5">
          <h3
            className="font-bold text-3xl md:text-[2.5rem] md:leading-[2.5rem] text-center"
            style={{ fontFamily: "Satoshi" }}
          >
            <span className="tracking-wide" style={{ fontFamily: "instrument-serif" }}>
              Integraciones
            </span>{" "}
            para tu negocio.
          </h3>
          <p
            className="text-base text-left pt-7 text-[#666666]"
            style={{ fontFamily: "Satoshi" }}
          >
            Con <span className="font-medium text-[#3d3d3d]">Fidel</span>, podes
            integrar fácilmente tu tienda online con{" "}
            <span className="font-medium text-[#3d3d3d]">Tienda Nube</span> o{" "}
            <span className="font-medium text-[#3d3d3d]">WooCommerce</span>.
            Aprovecha al máximo nuestras integraciones y potencia tu negocio.
          </p>
          <div
            className="inline-flex font-medium justify-start bg-[#fcfcfc] border border-[#E6E9EE] items-center mt-7 rounded-full px-2 py-1.5 gap-x-1.5 text-[#3d3d3d]"
            style={{ fontFamily: "Satoshi" }}
          >
            <CheckboxIcon className="size-6 mb-0.5 rounded-full bg-gradient-to-b from-[#b7ff33] to-[#dbff99] p-1 text-black" />
            Elegi entre Tienda Nube o WooCommerce para tu negocio.
          </div>
          <div
            className="inline-flex font-medium justify-start bg-[#fcfcfc] border border-[#E6E9EE] items-center mt-3.5 rounded-full px-2 py-1.5 gap-x-1.5 text-[#3d3d3d]"
            style={{ fontFamily: "Satoshi" }}
          >
            <RefreshIcon className="size-6 mb-0.5 rounded-full bg-gradient-to-b from-[#b7ff33] to-[#dbff99] p-1 text-black" />
            Actualiza precios, descuentos y stock automaticamente.
          </div>

          <div
            className="inline-flex font-medium justify-start bg-[#fcfcfc] border border-[#E6E9EE] items-center mt-3.5 rounded-full px-2 py-1.5 gap-x-1.5 text-[#3d3d3d]"
            style={{ fontFamily: "Satoshi" }}
          >
            <ThunderIcon className="size-6 mb-0.5 rounded-full bg-gradient-to-b from-[#b7ff33] to-[#dbff99] p-1 text-black" />
            Optimiza y mejora la gestión de tu negocio.
          </div>
        </div>
      </div>
    </div>
  );
}
