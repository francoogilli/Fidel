import { socialLinks, appLinks, footerLinks } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-[#191919] max-w-8xl mx-4 md:mx-5 mb-4 md:mb-5 rounded-[1.875rem] text-white p-4">
      <div className="flex flex-col md:flex-row justify-between px-3 md:px-24 pb-6 md:pb-16 pt-20">
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
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="bg-[#262626] rounded-xl p-2.5 hover:-translate-y-1 duration-200"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="flex space-x-24">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-base text-[#999999] font-normal pb-3.5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start border border-[#3a3a3a] rounded-2xl px-6 pt-4 h-full pb-6">
          <p className="text-xs md:text-base font-medium pb-4">
            Descarga nuestra App
          </p>
          <div className="flex flex-col justify-center w-full space-y-3">
            {appLinks.map((appLink, index) => (
              <a
                key={index}
                href={appLink.href}
                target="_blank"
                className="flex justify-center items-center space-x-3 bg-[#262626] hover:bg-[#373737] border border-[#333333] py-3.5 px-10 rounded-xl"
              >
                <appLink.icon />
                <div className="flex flex-col items-start">
                  <h3 className="text-xs font-medium text-[#999999]">
                    Descargar en
                  </h3>
                  <p className="text-sm md:text-base font-medium">
                    {appLink.platform}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2 md:px-24">
        <hr className="border border-[#242424]" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 text-sm  py-6 text-[#7d7d7d]">
          <p>© 2024 Fidel. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Template By Praha</p>
        </div>
      </div>
    </footer>
  );
}
