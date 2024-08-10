const Header = () => {
  return (
    <div
      className="sticky inset-x-0 backdrop-blur-lg bg-white/85  top-0 z-30 w-full transition-all "
      id="header-nav"
    >
      <div className="flex h-[54px] mx-auto lg:w-10/12 items-center justify-between px-4">
        <div className="flex items-center gap-x-3 justify-center">
          <img src="/fidel1.svg" className="size-9" alt="" />
          <span className="font-semibold text-lg">Fidel</span>
        </div>

        <div className=" items-center space-x-9 hidden md:flex">
          <a
            href="/"
            className="text-sm font-medium text-zinc-800  transition-colors duration-200 hover:text-black "
          >
            Inicio
          </a>
          <a
            href="/"
            className="text-sm font-medium text-zinc-800  transition-colors duration-200 hover:text-black "
          >
            Precios
          </a>
          <a
            href="/"
            className="text-sm font-medium text-zinc-800  transition-colors duration-200 hover:text-black "
          >
            Sobre
          </a>
          <a
            href="/"
            className="text-sm font-medium text-zinc-800  transition-colors duration-200 hover:text-black "
          >
            Contacto
          </a>
          <a
            href="/"
            className="text-sm font-medium text-zinc-800  transition-colors duration-200 hover:text-black "
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center space-x-2 mr-10 sm:mr-0">
          <button className="bg-[#2f2f2f] rounded-[14px] border text-white border-[#2f2f2f] text-[13px] px-5 py-2">Ingresar</button>

        </div>
      </div>
    </div>
  );
};
export default Header;
