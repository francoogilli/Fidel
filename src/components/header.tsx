import { useState } from "react";
import ArrowUpIcon from "../icons/arrow-up";

export default function Header() {
  const [isMenuOpen] = useState(false);

  const options = [
    { title: "Inicio" },
    { title: "Precios" },
    { title: "Sobre" },
    { title: "Contacto"},
    { title: "FAQs", icon: ArrowUpIcon },
  ];

  return (
    <header className=" top-0 bg-white/50 z-50 border border-b-slate-100">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 "
      >
        <div className="flex justify-center items-center gap-2">
          <img src="/fidel1.svg" width={50} />
          <p className="font-semibold text-lg">Fidel</p>
        </div>

        <div className="lg:hidden flex items-center">
          <button className="text-black hover:text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

          <div
            className={`lg:flex ${
              isMenuOpen ? "block" : "hidden"
            } flex-col lg:flex-row justify-center space-x-1 items-center px-4 py-2 text-sm font-medium`}
          >
            {options.map((option) => {
              const Icon = option.icon;
              return (
                <a
                  href="#"
                  className="text-neutral-800 duration-200 hover:text-black hover:bg-[#fffbf4] px-4 py-1.5 rounded-3xl flex items-center gap-1"
                  key={option.title}
                >
                  {option.title}
                  {Icon && <Icon className="size-4" />}
                </a>
              );
            })}
          </div>

          <div className="lg:flex hidden justify-center items-center gap-2">
            
            <button className="border duration-300 border-[#DFDFDF] bg-zinc-800 text-white font-normal hover:bg-zinc-700 text-sm px-5 py-2.5 rounded-3xl">
              Iniciar sesión
            </button>
          </div>
      </nav>
    </header>
  );
}