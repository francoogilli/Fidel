import CheckIcon from "../icons/check";
import CreditCardIcon from "../icons/creditCard";
import CrossIcon from "../icons/crossx";

interface Benefit {
  text: string;
  active: boolean;
}

interface PricingCardProps {
  name: string;
  price: number;
  bestOption: string;
  benefits: Benefit[];
}

export default function PricingCard() {
  const pricingData: PricingCardProps[] = [
    {
      name: "Básico",
      price: 10500,
      bestOption: "monotributistas",
      benefits: [
        { text: "Asesoría prioritaria", active: true },
        { text: "1 Usuario", active: true },
        {
          text: "Tienda Nube",
          active: false,
        },
        { text: "1 vendedor", active: false },
        { text: "App Mobile", active: false },
        { text: "Percepciones por Provincia en Ventas", active: false },
      ],
    },
    {
      name: "Inicial",
      price: 13500,
      bestOption: "negocios locales",
      benefits: [
        { text: "Asesoría prioritaria", active: true },
        { text: "3 usuarios", active: true },
        { text: "Tienda Nube", active: true },
        { text: "1 vendedor", active: false },
        { text: "App Mobile", active: false },
        { text: "Percepciones por Provincia en Ventas", active: false },
      ],
    },
    {
      name: "Intermedio",
      price: 18500,
      bestOption: "pequeñas y medianas empresas",
      benefits: [
        { text: "Asesoría prioritaria", active: true },
        { text: "6 usuarios", active: true },
        { text: "Tienda Nube", active: true },
        { text: "3 vendedores", active: true },
        { text: "App Mobile", active: true },
        { text: "Percepciones por Provincia en Ventas", active: false },
      ],
    },
    {
      name: "Avanzado",
      price: 23000,
      bestOption: "grandes empresas",
      benefits: [
        { text: "Asesoría personalizada", active: true },
        { text: "12 usuarios", active: true },
        { text: "Tienda Nube", active: true },
        { text: "9 Vendedores", active: true },
        { text: "App Mobile", active: true },
        { text: "Percepciones por Provincia en Ventas", active: true },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-32 mb-10 px-4 space-y-7">
      <div className="flex justify-center">
        <div className="flex items-center rounded-xl border border-[#e9e9e9] bg-gradient-to-br from-[#f5f5f5] to-[#fff] px-3 py-1">
          <CreditCardIcon />
          <h2 className="text-base font-medium text-center ml-2">Precios</h2>
        </div>
      </div>
      <h3 className="animation-1 text-4xl md:text-5xl font-semibold text-center my-8 pb-4">
        Planes{" "}
        <span className="bg-gradient-to-r from-[#2fe22c] via-[#35fa32] to-[#ff9500] bg-clip-text text-transparent tracking-tight">
          únicos
        </span>{" "}
        para cada negocio.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {pricingData.map((pricing) => (
          <div
            className="flex flex-col p-6 text-center bg-gradient-to-br from-[#f7f7f7b9] to-[#fff] rounded-3xl border border-[#ededed] hover:scale-105 duration-500"
            key={pricing.name}
          >
            <h3 className="text-3xl text-left font-bold bg-gradient-to-r from-[#131313] to-[#3d3d3d] bg-clip-text text-transparent">
              {pricing.name}
            </h3>
            <p className="font-light text-zinc-500 text-[10px] sm:text-xs text-left">
              Para {pricing.bestOption}
            </p>
            <div className="flex justify-start text-left items-baseline my-5">
              <span className="text-5xl font-semibold">
                ${Number(pricing.price).toLocaleString("en-US")}
              </span>
              <span className="font-light text-zinc-500 sm:text-xs text-left">
                /mes
              </span>
            </div>
            <hr className="border-dashed border-t-2 border-neutral-200 mb-5" />
            <p className="font-light text-zinc-500 sm:text-xs text-left pb-3">
              ¿Qué incluye?
            </p>
            <ul role="list" className="mb-7 space-y-4 text-left">
              {pricing.benefits.map((benefit, index) => (
                <li className="flex items-center space-x-2" key={index}>
                  {benefit.active ? <CheckIcon /> : <CrossIcon />}
                  <span className="text-sm">{benefit.text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-gradient-to-r from-[#35fa32] via-[#2fe22c] to-[#35fa32] text-white font-semibold rounded-xl text-sm px-5 py-2.5 text-center"
            >
              Elegir
            </a>
          </div>
        ))}
      </div>
      {/* <Referred /> */}
    </div>
  );
}
