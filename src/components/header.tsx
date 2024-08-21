import { Link } from "react-router-dom";
import { navLinks } from "../data/data";

export default function Header() {
  return (
    <header className="bg-transparent top-0 z-40 border-b border-[#fcfcfc] transition duration-200 ease-in-out">
      <div className="mx-auto w-full max-w-5xl px-6 md:max-w-7xl">
        <div className="mx-auto hidden h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex">
          <div className="flex lg:w-[225px]">
            <a
              href="/"
              className="flex justify-center items-center space-x-2 outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 py-1"
            >
              <img src="/fidelnew.svg" className="w-11" alt="" />
              <p className="text-base font-semibold pt-0.5 text-[#101010]">Fidel</p>
            </a>
          </div>
          <div className="relative pr-20">
            <ul className="flex items-center text-[13px] font-medium">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <li
                  className="hover:bg-[#00000007] transition duration-300 cursor-pointer border border-none hover:border-[#e7e7e7] px-5 py-2 rounded-lg"
                >
                  {link.label}
                </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            
            <a
              href=""
              className="text-[13px] py-2 px-6 font-normal bg-zinc-800 text-white inline-flex items-center  justify-center select-none rounded-xl"
            >
              Ingresar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
