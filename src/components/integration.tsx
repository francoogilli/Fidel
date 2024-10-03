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
      <div className="flex mx-auto justify-center items-center">
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
      <h4
        className="animation-1 text-center text-sm md:text-lg text-[#5c5c5c] font-medium md:w-[50%] mx-auto pb-0 md:pb-14"
        style={{ fontFamily: "Satoshi" }}
      >
        Facilita la gestión de tu tienda online sincronizando inventarios,
        pedidos y ventas, todo desde un mismo lugar y sin complicaciones.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-12 relative gap-x-5">
        <div className="col-span-6 relative hidden md:block border border-[#ffffff] rounded-3xl">
          <div className="absolute flex justify-center bg-[#fbfbfb] px-12 py-4 rounded-[2rem] hover:scale-105 top-5 left-16 transition-all duration-300">
            <TiendaNubeIcon className="size-28" fill="#212121" />
          </div>
          <div className="absolute flex justify-center top-[12rem] left-[12rem] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="67"
              fill="none"
              className="rotate-[20deg]"
            >
              <path
                fill="url(#a)"
                d="M147.521 50.916c-.49 1.397-.941 4.602-2.612 4.974-2.256.502-2.207-1.974-2.187-3.563.038-3.125 2.111-7.63 1.195-10.508-18.169 15.77-40.599 24.464-64.689 24.532-23.96.068-50.583-7.634-66.415-26.757C5.063 30.234-.091 18.814.817 6.382.895 5.315 1.036.023 3.015.936c1.031.475.784 7.268.929 8.487.752 6.339 2.561 12.186 5.617 17.771 10.412 19.032 32.04 29.724 52.672 32.891 13.667 2.098 28.107 1.172 41.511-2.46 6.919-1.875 13.805-4.453 20.078-7.969 5.292-2.965 14.11-7.637 17.296-13.038-5.355-1.018-11.893 3.17-17.388 2.945-2.911-.119-5.471-2.465-2.596-4.81 2.331-1.9 7.646-1.754 10.522-2.203 3.21-.501 6.417-.895 9.659-1.093 2.378-.146 7.42-1.45 9.313.211 3.347 2.937-1.966 15.628-3.107 19.248.476-1.51-.512 1.46 0 0z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="153.753"
                  x2="7.439"
                  y1="32.649"
                  y2="21.339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#000" />
                  <stop offset="1" stop-color="#000" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute flex justify-center top-[4.5rem] right-[11rem] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="67"
              fill="none"
              className="rotate-[205deg]"
            >
              <path
                fill="url(#a)"
                d="M147.521 50.916c-.49 1.397-.941 4.602-2.612 4.974-2.256.502-2.207-1.974-2.187-3.563.038-3.125 2.111-7.63 1.195-10.508-18.169 15.77-40.599 24.464-64.689 24.532-23.96.068-50.583-7.634-66.415-26.757C5.063 30.234-.091 18.814.817 6.382.895 5.315 1.036.023 3.015.936c1.031.475.784 7.268.929 8.487.752 6.339 2.561 12.186 5.617 17.771 10.412 19.032 32.04 29.724 52.672 32.891 13.667 2.098 28.107 1.172 41.511-2.46 6.919-1.875 13.805-4.453 20.078-7.969 5.292-2.965 14.11-7.637 17.296-13.038-5.355-1.018-11.893 3.17-17.388 2.945-2.911-.119-5.471-2.465-2.596-4.81 2.331-1.9 7.646-1.754 10.522-2.203 3.21-.501 6.417-.895 9.659-1.093 2.378-.146 7.42-1.45 9.313.211 3.347 2.937-1.966 15.628-3.107 19.248.476-1.51-.512 1.46 0 0z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="153.753"
                  x2="7.439"
                  y1="32.649"
                  y2="21.339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#000" />
                  <stop offset="1" stop-color="#000" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
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
            className="font-bold text-3xl md:text-[2.5rem] md:leading-[2.5rem] text-center md:text-left"
            style={{ fontFamily: "Satoshi" }}
          >
            <span
              className="tracking-wide"
              style={{ fontFamily: "instrument-serif" }}
            >
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
