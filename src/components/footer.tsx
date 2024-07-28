import Apple from "../icons/apple";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import PlayStore from "../icons/playstore";
import Whatsapp from "../icons/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#191919] max-w-8xl mx-4 md:mx-5 mb-4 md:mb-5 rounded-[1.875rem] text-white p-4">
      <div className="flex justify-between px-24 pb-16 pt-20">
        <div className="flex flex-col justify-start max-w-72">
          <div className="flex justify-start items-center space-x-4">
            <img src="/fidel1.svg" width={80} alt="Fidel Logo" />
            <p className="text-3xl font-medium">Fidel</p>
          </div>
          <p className="text-[#a9a9a9] text-base font-medium pt-5">
            Empowering Your Projects, Enhancing Your Success, Every Step of the
            Way.
          </p>
          <div className="flex justify-start items-center space-x-3 pt-6">
            <a
              href="https://www.facebook.com/fidelgestion"
              className="bg-[#262626] rounded-xl p-2.5 hover:-translate-y-1 duration-200"
            >
              <Facebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=543564222935"
              className="bg-[#262626] rounded-xl p-2.5 hover:-translate-y-1 duration-200"
            >
              <Whatsapp />
            </a>
            <a
              href="https://www.instagram.com/fidelsistema"
              className="bg-[#262626] rounded-xl p-2.5 hover:-translate-y-1 duration-200"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <div className="flex space-x-24">
          <div>
            <h3 className="text-base text-[#999999] font-normal pb-3.5">
              Home
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#link1"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Product Features
                </a>
              </li>
              <li>
                <a
                  href="#link2"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  How To Use
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Key Features
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  FAQ’s
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base text-[#999999] font-normal pb-3.5">App</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#link1"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="#link2"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Desktop App
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  How To Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base text-[#999999] font-normal pb-3.5">
              All Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#link1"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#link2"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  App
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Blogs Open
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#link3"
                  className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                >
                  404
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start border border-[#3a3a3a] rounded-2xl px-6 pt-4 h-full pb-6">
          <p className="text-xs md:text-base font-medium pb-4">
            Descarga nuestra App
          </p>
          <div className="flex flex-col justify-center space-y-3">
            <a
              href="https://play.google.com/store/apps/details?id=ar.com.fidel"
              className="flex justify-center items-center space-x-3 bg-[#262626] hover:bg-[#373737] border border-[#333333] py-3.5 px-10 rounded-xl"
            >
              <PlayStore />
              <div className="flex flex-col items-start">
                <h3 className="text-xs font-medium text-[#999999]">
                Descargar en
                </h3>
                <p className="text-sm md:text-base font-medium">Google Play</p>
              </div>
            </a>
            <a
              href="https://apps.apple.com/ar/app/fidel-gesti%C3%B3n/id1670120525"
              className="flex justify-center items-center space-x-3 bg-[#262626] hover:bg-[#373737] border border-[#333333] py-3.5 px-10 rounded-xl"
            >
              <Apple />
              <div className="flex flex-col items-start">
                <h3 className="text-xs font-medium text-[#999999]">
                  Descargar en
                </h3>
                <p className="text-sm md:text-base font-medium">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="px-24">
        <hr className="border border-[#242424]" />
        <div className="flex text-sm justify-between items-center py-6 text-[#999999]">
          <p>© 2024 Fidel. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Template By Praha</p>
        </div>
      </div>
    </footer>
  );
}
