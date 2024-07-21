import CheckIcon from "../icons/check";
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
        { text: "1 Usuario (sin contar vendedores)", active: true },
        {
          text: "Tienda Nube (precios, stock, fotos y pedidos)",
          active: false,
        },
        { text: "Vendedores para toma de Pedidos en App", active: false },
        { text: "App Mobile (pedidos y órdenes de compra)", active: false },
        { text: "Percepciones por Provincia en Ventas", active: false },
      ],
    },
    {
      name: "Inicial",
      price: 13500,
      bestOption: "negocios locales",
      benefits: [
        { text: "Asesoría prioritaria", active: true },
        { text: "Hasta 3 Usuarios (sin contar vendedores)", active: true },
        { text: "Tienda Nube (precios, stock, fotos y pedidos)", active: true },
        { text: "Vendedores para toma de Pedidos en App", active: false },
        { text: "App Mobile (pedidos y órdenes de compra)", active: false },
        { text: "Percepciones por Provincia en Ventas", active: false },
      ],
    },
    {
      name: "Intermedio",
      price: 18500,
      bestOption: "pequeñas y medianas empresas",
      benefits: [
        { text: "Asesoría prioritaria", active: true },
        { text: "Hasta 6 Usuarios (sin contar vendedores)", active: true },
        { text: "Tienda Nube (precios, stock, fotos y pedidos)", active: true },
        { text: "Hasta 3 Vendedores para toma de Pedidos", active: true },
        { text: "App Mobile (pedidos y órdenes de compra)", active: true },
        { text: "Percepciones por Provincia en Ventas", active: false },
      ],
    },
    {
      name: "Avanzado",
      price: 23000,
      bestOption: "grandes empresas",
      benefits: [
        { text: "Asesoría personalizada", active: true },
        { text: "Hasta 12 Usuarios (sin contar vendedores)", active: true },
        { text: "Tienda Nube (precios, stock, fotos y pedidos)", active: true },
        { text: "Hasta 9 Vendedores para toma de Pedidos", active: true },
        { text: "App Mobile (pedidos y órdenes de compra)", active: true },
        { text: "Percepciones por Provincia en Ventas", active: true },
      ],
    },
  ];

  const keywords = [
    "1 Usuario",
    "12 Usuarios",
    "3 Usuarios",
    "6 Usuarios",
    "3 Vendedores",
    "9 Vendedores",
    "Tienda Nube",
    "personalizada"
  ];

  return (
    <div className="max-w-7xl mx-auto mt-32 mb-10 px-4">
      <h2 className="text-4xl md:text-5xl font-semibold text-center my-8 pb-4">
        Planes{" "}
        <span className="bg-gradient-to-r from-[#2fe22c] via-[#35fa32] to-[#ff9500] bg-clip-text text-transparent tracking-tight">
          únicos
        </span>{" "}
        para cada negocio.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingData.map((pricing) => (
          <div
            className="flex flex-col p-6 text-center bg-gradient-to-br from-[#fbf5e9] to-[#fffbf2] rounded-3xl border border-[#ffdede] hover:scale-105 duration-500"
            key={pricing.name}
          >
            <h3 className="text-3xl text-left font-bold bg-gradient-to-r from-[#1c1c1c] to-[#3d3d3d] bg-clip-text text-transparent">{pricing.name}</h3>
            <p className="font-light text-zinc-500 sm:text-xs text-left">
              Para {pricing.bestOption}
            </p>
            <div className="flex justify-start text-left items-baseline my-6">
              <span className="text-5xl font-semibold">
                ${Number(pricing.price).toLocaleString("en-US")}
              </span>
              <span className="font-light text-zinc-500 sm:text-xs text-left">
                /mes
              </span>
            </div>
            <p className="font-light text-zinc-500 sm:text-xs text-left pb-3">
              ¿Qué incluye?
            </p>
            <ul role="list" className="mb-7 space-y-4 text-left">
              {pricing.benefits.map((benefit, index) => (
                <li className="flex items-center space-x-2" key={index}>
                  {benefit.active ? <CheckIcon /> : <CrossIcon />}
                  <span className="text-sm">
                    {benefit.text
                      .split(new RegExp(`(${keywords.join("|")})`, "gi"))
                      .map((part, i) =>
                        keywords.includes(part) && benefit.active ? (
                          <span className="font-semibold" key={i}>
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-gradient-to-r from-[#2fe22c] via-[#35fa32] to-[#ff9500] text-white font-semibold rounded-xl text-sm px-5 py-2.5 text-center hover:scale-105 duration-500"
            >
              Elegir
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
