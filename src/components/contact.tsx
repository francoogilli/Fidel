import SendIcon from "../icons/send";
import SparklesIcon from "../icons/sparkles";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto px-4 gap-y-5 md:gap-x-5 pt-32">
      <div className="col-span-5 bg-[#fafafa] rounded-3xl p-6 md:p-12">
        <div className="flex justify-center md:justify-start items-center gap-x-2 pb-4 md:pb-7">
          <img src="fidel1.svg" className="opacity-85" width={40} alt="" />
          <p
            className="text-xl font-semibold"
            style={{ fontFamily: "Satoshi" }}
          >
            Fidel
          </p>
        </div>
        <p
          className="text-[#1f1f1f] font-normal text-2xl md:text-3xl tracking-tight"
          style={{ fontFamily: "Satoshi" }}
        >
          ¿Tenes alguna duda?
        </p>
        <p
          className="text-[#1f1f1f] font-semibold text-2xl md:text-3xl tracking-tight pb-4"
          style={{ fontFamily: "Satoshi" }}
        >
          No dudes en contactarnos.
        </p>
        <p
          className="text-[#444444] font-medium tracking-tight text-sm pb-10"
          style={{ fontFamily: "Satoshi" }}
        >
          Envíanos tu consulta y nuestro equipo se pondrá en contacto con vos a
          la brevedad responder a tus preguntas.
        </p>
        <div className="flex-row space-y-7">
          <div className="grid grid-cols-2 gap-x-6">
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Nombre</label>
              <input
                type="text"
                className="border rounded-xl text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
                placeholder="Nombre"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Apellido</label>
              <input
                type="text"
                className="border rounded-xl text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="text"
              className="border rounded-xl text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
              placeholder="nombre@correo.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium mb-1">Teléfono</label>
            <input
              type="text"
              className="border rounded-xl text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
              placeholder="Número de teléfono"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium mb-1">Mensaje</label>
            <textarea
              rows={4}
              className="border rounded-xl resize-none text-sm p-2.5 placeholder:text-sm placeholder:px-0.5"
              placeholder="Cualquier mensaje adicional que quieras agregar..."
            />
          </div>
          <button
            className="group flex justify-center items-center bg-[#303030] hover:bg-[#121212] w-full text-white text-sm font-medium rounded-xl px-5 py-3 transition-colors duration-300"
            style={{ fontFamily: "Satoshi" }}
          >
            Enviar mensaje
            <SendIcon className="size-4 ml-2 mt-0.5 transform transition-transform duration-500 group-hover:rotate-45" />
          </button>
        </div>
      </div>
      <div className="col-span-7 bg-[#f5f5f541] rounded-3xl px-8 md:px-4 flex flex-col justify-center items-center">
        <div className=" flex rounded-full pt-5 md:pt-0 px-44 items-center justify-center gap-x-1.5 mr-1.5">
          <img
            src="/fidel1.svg"
            className="size-10 md:size-14"
            alt="Logo de Fidel"
            draggable={false}
          />
          <h6
            className="text-[#1b1b1b] text-xl md:text-3xl font-semibold"
            style={{ fontFamily: "Satoshi" }}
          >
            Fidel
          </h6>
        </div>
        <div className="text-center pt-5 md:pt-12">
          <h3
            className="text-[#1b1b1b] text-4xl md:text-7xl font-bold pb-7 md:pb-16"
            style={{ fontFamily: "Satoshi" }}
          >
            Empeza a ordenar tu negocio{" "}
            <span
              className="text-[#5fff5c]"
              style={{ fontFamily: "instrument-serif" }}
            >
              hoy.
            </span>
          </h3>
          <h6
            className="mx-auto text-base md:text-lg pt-1 w-[22rem] md:w-[30rem] font-medium text-[#404040]"
            style={{ fontFamily: "Satoshi" }}
          >
            La organización que buscas para tu empresa, en un solo lugar.
            Transforma tu empresa con Fidel.
          </h6>
          <button
            className="bg-[#5fff5c] mx-auto mt-5 mb-5 md:mb-0 md:mt-5 gap-2 tracking-tighter md:tracking-normal text-[#000] w-auto font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#ffffff] hover:border-[#e0ffdfdf] transition-all duration-700"
            style={{ fontFamily: "Satoshi" }}
          >
            <SparklesIcon className="size-4 md:size-5" />
            Empezar ahora
          </button>
        </div>
      </div>
    </div>
  );
}
