import { FAQIcon } from "../icons/faq"

export const QuestionsAnswers = () => {
    return(
        <div className="max-w-7xl mx-auto mt-32 mb-10 px-4 space-y-7">
      <div className="flex justify-center">
        <div className="flex items-center rounded-3xl border border-[#e9e9e9] px-3 py-1">
          <FAQIcon className="size-4 md:size-5" />
          <h2 className="text-xs md:text-sm font-medium text-center ml-2" style={{ fontFamily: "Satoshi" }}>FAQs</h2>
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
        ¿Todavia tenes preguntas? Contacta a nuestro soporte, disponible durante la semana.
      </h4>
      </div>
    )
}