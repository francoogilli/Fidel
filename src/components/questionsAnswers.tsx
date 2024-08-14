import { useState } from "react";
import { FAQIcon } from "../icons/faq";
import WorldIcon  from "../icons/world";
import CalendarIcon from "../icons/calendar";
import FileImportIcon from "../icons/file-import";
import ScreenIcon from "../icons/screen";
import CloudIcon from "../icons/cloud";
import HelpIcon from "../icons/help";
interface AccordionItem {
  id: number;
  title: string;
  content: string;
  icon: React.ComponentType<any>;
}

export const QuestionsAnswers = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "¿Desde dónde se puede usar Fidel?",
      content:
        "Fidel es una plataforma accesible desde cualquier lugar con conexión a internet. Podes usarla en tu computadora, tablet o smartphone, lo que te permite gestionar tus procesos de negocio y acceder a herramientas analíticas estés donde estés.",
      icon: WorldIcon,
    },
    {
      id: 2,
      title: "¿Con qué frecuencia se actualiza Fidel?",
      content:
        "En Fidel, actualizamos y mejoramos nuestro servicio cada 15 días. Priorizamos los requerimientos de nuestros clientes para garantizar que cada actualización aborde sus necesidades y mejore la plataforma de acuerdo con sus expectativas.",
      icon: CalendarIcon,
    },
    {
        id:3,
        title:"¿Puedo importar mi información al sistema?",
        content:"Sí, puedes importar tu información a Fidel. Con esta funcionalidad, podes cargar de manera simple y rápida tus clientes, proveedores y productos. Para comenzar, consulta nuestra guía de importación o contacta con nuestro equipo de soporte.",
        icon:FileImportIcon
    },
    {
        id: 4,
        title:"¿Necesito instalar algo para utilizar Fidel?",
        content:"No, Fidel es una plataforma que funciona en la nube, por lo que no necesitas instalar ningún software adicional en tu computadora. Solo necesitas un navegador web y una conexión a Internet para acceder y utilizar el sistema.",
        icon:ScreenIcon
    },
    {
        id: 5,
        title:"¿Se realiza una copia de seguridad de mi información?",
        content:"Sí, se realizan copias de seguridad periódicas de tu información para garantizar su seguridad y disponibilidad. Esto asegura que tus datos estén protegidos y puedan ser recuperados en caso de cualquier imprevisto.",
        icon:CloudIcon
    },
    {
        id: 6,
        title:"¿Qué hago si necesito ayuda?",
        content:"Si necesitas ayuda, nuestro equipo de soporte está disponible para ayudarte. Podes contactarnos a través de WhatsApp, correo electrónico o llamada, y estaremos disponibles para resolver cualquier duda o inconveniente que tengas al usar Fidel.",
        icon:HelpIcon
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto mt-32 mb-10 px-4 space-y-7">
      <div className="flex justify-center">
        <div className="flex items-center rounded-3xl border border-[#e9e9e9] px-3 py-1">
          <FAQIcon className="size-4 md:size-5" />
          <h2
            className="text-xs md:text-sm font-medium text-center ml-2"
            style={{ fontFamily: "Satoshi" }}
          >
            FAQs
          </h2>
        </div>
      </div>
      <h3
        className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
        style={{ fontFamily: "Satoshi" }}
      >
        Preguntas,
        <span
          className="italic text-4xl md:text-[3.25rem] tracking-wide"
          style={{ fontFamily: "instrument-serif" }}
        >
          {" "}
          respuestas.
        </span>
      </h3>
      <h4
        className="text-center text-sm md:text-lg text-[#5c5c5c] font-medium w-[16rem] md:w-[25rem] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
      >
        ¿Todavía tenes preguntas? Contacta a nuestro soporte, disponible durante
        la semana.
      </h4>
      <div className="space-y-4">
        {accordionData.map((item, index) => {
          const IconComponent = item.icon; // Obtiene el componente de ícono

          return (
            <div
              key={item.id}
              className="mx-auto max-w-[50rem] border border-[#e9e9e9] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-5 py-5 bg-[#ffffff] text-left font-medium flex items-center justify-between"
              >
                <span className="flex items-center">
                  <IconComponent className="mr-3 size-5" />
                  <span
                    className="text-sm md:text-[1.0625rem] font-medium"
                    style={{ fontFamily: "Satoshi" }}
                  >
                    {item.title}
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`size-4 md:size-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-135" : "rotate-90"
                  }`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {openIndex === index ? (
                    <path d="M5 12h14" />
                  ) : (
                    <>
                      <path d="M12 5l0 14" />
                      <path d="M5 12l14 0" />
                    </>
                  )}
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-screen pb-4 px-5" : "max-h-0"
                }`}
              >
                <p
                  className="text-xs md:text-base font-medium text-[#707070]"
                  style={{ fontFamily: "Satoshi" }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
