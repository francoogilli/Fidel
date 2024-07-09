import { useState } from "react";
import ArrowUpIcon from "../icons/arrow-up";
import MessageIcon from "../icons/message";

export default function Header() {
  const [isMenuOpen] = useState(false);

  const options = [
    { title: "Inicio" },
    { title: "Sobre Fidel" },
    { title: "App" },
    { title: "Ventajas" },
    { title: "Recomendanos", icon: ArrowUpIcon },
  ];

  return (
    <header className="sticky top-0 bg-[#fffbf2] z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
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

        <div className="hidden lg:flex justify-center">
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
                  className="text-[#6c6c6c] hover:text-black border border-[#f9f9f9] hover:border-[#DFDFDF] hover:bg-[#fffbf4] px-4 py-1.5 rounded-3xl flex items-center gap-1"
                  key={option.title}
                >
                  {option.title}
                  {Icon && <Icon className="size-4" />}
                </a>
              );
            })}
          </div>

          <div className="lg:flex hidden justify-center items-center gap-2">
            <div className="bg-[#fffaf0] border border-zinc-200 p-1.5 rounded-3xl cursor-pointer">
              <MessageIcon />
            </div>
            <button className="border border-[#DFDFDF] bg-zinc-800 text-white font-medium hover:bg-zinc-700 text-sm px-6 py-2.5 rounded-3xl">
              Iniciar sesión
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
