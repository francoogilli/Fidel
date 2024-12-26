import AdvantagesIcon from "../icons/advantages";
import CashIcon from "../icons/cash";
import ChartIcon from "../icons/chart";
import PackageIcon from "../icons/package";
import ReceiptIcon from "../icons/receipt";
import ShoppingBagIcon from "../icons/shopping-bag";
import ShoppingCartIcon from "../icons/shopping-cart";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import { TruckDeliveryIcon } from "../icons/truck-delivery";
import UsersIcon from "../icons/users";
import GradientLine from "./gradientLine";

const cardsData = [
  {
    icon: <ShoppingCartIcon className="size-10" strokeWidth="2" />,
    title: "Ventas",
    description: "Facilita tus cobranzas y la creación de presupuestos.",
  },
  {
    icon: <ShoppingBagIcon className="size-10" strokeWidth="2" />,
    title: "Compras",
    description: "Gestiona facturas, pagos y órdenes de pago.",
  },
  {
    icon: <UsersIcon className="size-10" />,
    title: "Clientes",
    description: "Consulta el saldo de clientes y accede a datos y facturas.",
  },
  {
    icon: <PackageIcon className="size-10" />,
    title: "Productos",
    description:
      "Consulta el precios, stock de productos y en diferentes listas.",
  },
  {
    icon: <CashIcon className="size-10" strokeWidth="2" />,
    title: "Caja",
    description: "Gestión de movimientos y pagos del comercio.",
  },
  {
    icon: <ChartIcon className="size-10" />,
    title: "Estadisticas",
    description: "Visualiza tus métricas de ventas y compras.",
  },
  {
    icon: <ReceiptIcon className="size-10" />,
    title: "Contabilidad",
    description:
      "Controla el IVA y los reportes de Ingresos Brutos y Retenciones.",
  },
  {
    icon: <TruckDeliveryIcon className="size-10 ml-0.5" />,
    title: "Pedidos",
    description: "Gestión de pedidos, desde confección hasta facturación.",
  },
];

function AdvantageCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="col-span-1 py-10 bg-[#f8faf9] border border-[#e7e7e7] flex flex-col justify-center items-center rounded-3xl p-4 bg-[url('/fondointe.avif')] bg-cover bg-center">
      <div className="bg-gradient-to-tr from-[#63ff33] to-[#cdffbc] rounded-full p-3.5 flex justify-center items-center mb-2">
        {icon}
      </div>
      <h4
        className="text-2xl text-[#333333] pt-3 pb-3 font-bold text-center"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        {title}
      </h4>
      <h6
        className="text-base px-3 font-medium text-[#777777] text-center"
        style={{ fontFamily: "Satoshi" }}
      >
        {description}
      </h6>
    </div>
  );
}

export default function Advantages() {
  return (
    <div className="max-w-7xl mb-8 mx-auto px-4 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#333333] px-4 py-2 animation-1">
          <AdvantagesIcon className="size-4 text-[#f5f5f5]" />
          <h2
            className="text-xs md:text-sm font-medium text-center ml-2 text-[#f5f5f5]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Ventajas
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <div className="flex mx-auto justify-center items-center">
        <h3
          className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Aprovecha todas nuestras ventajas
        </h3>
      </div>
      <h4
        className="animation-1 text-center text-sm md:text-lg text-[#5c5c5c] font-medium md:w-[50%] mx-auto pb-0 md:pb-14"
        style={{ fontFamily: "Satoshi" }}
      >
        Descubrí las funcionalidades que nos hacen la mejor opción para hacer
        crecer tu negocio y aprovechar al máximo tu emprendimiento.
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {cardsData.map((card, index) => (
          <AdvantageCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
