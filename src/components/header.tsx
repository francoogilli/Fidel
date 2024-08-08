export default function Header() {
  return (
    <header
      dir="ltr"
      data-orientation="horizontal"
      className="sticky top-0 z-40 border-b  transition duration-200 ease-in-out bg-white/95 border-white/10 animate-header-slide-down-fade"
    >
      <div className="md:max-w-7xl mx-auto w-full ">
        <div className=" hidden h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex  backdrop-blur-md">
          <div className="flex lg:w-[225px] justify-start items-center gap-2">
            <img src="/fidel1.svg" width={50} />
            <p className="font-semibold text-lg">Fidel</p>
          </div>
          <div className="relative">
            <ul
              data-orientation="horizontal"
              className="flex items-center"
              dir="ltr"
            >
              <li className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-4">
                About
              </li>
              <li className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-4">
                Blog
              </li>
              <li className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-4">
                Customers
              </li>
              <li className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-4">
                Resources
              </li>
              <li className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-4">
                Docs
              </li>
              <li className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-2 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-4">
                Pricing
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-4 gap-0 font-semibold bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12  focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70  lg:flex"
            >
              Sign In
            </a>
            <a
              href="#"
              className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
