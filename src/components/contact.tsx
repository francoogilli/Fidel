import MailIcon from "../icons/email";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center gap-x-2.5 mt-16 mb-10 md:mt-32">
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#333333] px-4 py-2 animation-1">
          <MailIcon className="size-4 md:size-5 text-[#f5f5f5]" />
          <h2
            className="text-xs md:text-sm font-medium text-center ml-2 text-[#f5f5f5]"
            style={{ fontFamily: "Satoshi" }}
          >
            Contacto
          </h2>
        </div>
        <ThreeStripesRight />
      </div>
      <h3
        className="animation-1 text-4xl md:text-[3.25rem] font-bold text-center my-8 pb-1 tracking-tight"
        style={{ fontFamily: "Satoshi" }}
      >
        ¿Tenes preguntas?
        <span
          className="italic text-4xl md:text-[3.25rem] tracking-wide"
          style={{ fontFamily: "instrument-serif" }}
        >
          {" "}
          Contáctanos
        </span>
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg text-[#5c5c5c] font-medium w-[20rem] md:w-[45rem] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
      >
        <span className="hidden md:inline">¿Tenes alguna duda sobre el sistema o queres
        consultar algo en general?</span> Completa el formulario y te respondemos en un plazo de 2 días hábiles.
      </h4>
      <div className="flex flex-col mx-auto max-w-[50rem] pt-7 justify-center gap-y-5 px-4">
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Nombre y Apellido</label>
          <input
            type="text"
            className="border rounded-xl text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
            placeholder="Nombre completo"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Email</label>
          <input
            type="text"
            className="border rounded-xl text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
            placeholder="nombre@ejemplo.com"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Telefono</label>
          <input
            type="text"
            className="border rounded-xl text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
            placeholder="Numero de Telefono"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Mensaje</label>
          <textarea
            rows={4}
            className="border rounded-xl resize-none text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
            placeholder="Hola, tengo una pregunta..."
          />
        </div>
        <button
          className="group flex justify-center items-center bg-[#5FFF5C] hover:bg-[#92ff90] w-full text-black text-sm font-semibold rounded-xl px-5 py-3 transition-colors duration-300"
          style={{ fontFamily: "Satoshi" }}
        >
          Enviar mensaje
        </button>
      </div>
    </>
  );
}
