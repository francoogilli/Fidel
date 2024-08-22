import { termsData } from "../data/data";

const TermsAndConditions = () => {
  return (
    <div className="bg-white" style={{ fontFamily: "Outfit Variable" }}>
      <div className="max-w-5xl mx-auto px-4">
        <h3
          className="text-3xl md:text-6xl font-medium pt-12 md:pt-24 justify-center flex pb-2"
          style={{ fontFamily: "Outfit Variable" }}
        >
          Términos y Condiciones
        </h3>
        <div className="pt-2 md:pt-8 text-lg">
          <p className="text-[#242726] pb-12 md:pb-24 font-light text-base flex justify-center">
            Última Actualización: {termsData.lastUpdated}
          </p>

          {termsData.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-[1.7rem] my-8">
                {section.title}
              </h4>
              {section.content.map((paragraph, i) => (
                <p className="text-[#242726] font-light text-base" key={i}>
                  {paragraph}
                </p>
              ))}
              {section.listItems && (
                <ul className="list-disc list-inside text-[#242726] font-light text-base">
                  {section.listItems.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
