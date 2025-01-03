import { Formik, Form } from "formik";
import MailIcon from "../icons/email";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";
import * as Yup from "yup";
import { useState } from "react";
import { Contact, PostRequest } from "../api/types";
import saveContact from "../api";
import UsersIconIndividual from "../icons/user";
import PhoneIcon from "../icons/phone";
import MessageIcon from "../icons/message";
import CheckSquareIcon from "../icons/checkSquare";
import DangerIcon from "../icons/danger";
import { ModalScheduleMeet } from "./modalScheduleMeet";
interface Props {
  viewPage?: boolean;
}

const validationSchema = Yup.object({
  firstname: Yup.string().required("El nombre es requerido"),
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  phone: Yup.string().required("El teléfono es requerido"),
  publicidad: Yup.string().required("El mensaje es requerido"),
});

export default function ContactSection({ viewPage }: Props) {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "warning" | "error">(
    "success"
  );

  const toastConfig = {
    success: {
      icon: (
        <CheckSquareIcon className="size-9 text-[#34ff30]" strokeWidth="1.8" />
      ),
      bgColor: "bg-gradient-to-tr from-[#1C1C1C] via-[#1C1C1C] to-[#404040]",
      textColor: "text-[#f0f0f0]",
    },
    warning: {
      icon: <DangerIcon className="size-9 text-[#fff86e]" strokeWidth="1.8" />,
      bgColor: "bg-gradient-to-tr from-[#1C1C1C] via-[#1C1C1C] to-[#000]",
      textColor: "text-[#f0f0f0]",
    },
    error: {
      icon: (
        <CheckSquareIcon className="size-9 text-[#ff3030]" strokeWidth="1.8" />
      ),
      bgColor: "bg-gradient-to-tr from-[#400000] via-[#400000] to-[#800000]",
      textColor: "text-[#ffe6e6]",
    },
  };
  const [values] = useState<Contact>({
    firstname: "",
    email: "",
    phone: "",
    publicidad: "",
  });
  const handleSubmit = async (values: Contact) => {
    const body: PostRequest = {
      properties: {
        firstname: values.firstname,
        email: values.email,
        phone: values.phone,
        publicidad: values.publicidad,
      },
    };

    const result = await saveContact(body);

    if (result.success) {
      setToastType("success");
      setToastMessage("Contacto creado con éxito.");
    } else if (
      result.error?.status === 409 &&
      result.error?.category === "CONFLICT"
    ) {
      setToastType("warning");
      setToastMessage("Ya hemos recibido tu mensaje.");
    } else {
      setToastType("error");
      setToastMessage("Ocurrió un error inesperado.");
    }

    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 7000);
  };

  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-4 md:px-3">
      {toastVisible && (
        <div
          id="toast-simple"
          className={`flex items-center w-full ${toastConfig[toastType].bgColor} ${toastConfig[toastType].textColor} max-w-xs p-2 space-x-4 divide-x rounded-xl divide-[#c1c1c1] fixed top-5 right-5 z-50`}
          role="alert"
        >
          {toastConfig[toastType].icon}
          <div
            className="pl-4 text-sm font-semibold"
            style={{ fontFamily: "Satoshi" }}
          >
            {toastMessage}
          </div>
        </div>
      )}

      {!viewPage ? (
        <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
          <GradientLine weight="1.5px" direction="left" />
          <ThreeStripesLeft />
          <div className="flex items-center rounded-full bg-[#333333] px-4 xl:px-5 py-2 animation-1">
            <MailIcon className="size-4 md:size-5 text-[#f5f5f5]" />
            <h2
              className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#f5f5f5]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Contacto
            </h2>
          </div>
          <ThreeStripesRight />
          <GradientLine weight="1.5px" direction="right" />
        </div>
      ) : (
        <div className="pt-10"></div>
      )}
      <h3
        className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-3 md:my-8 pb-1 tracking-tight"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        ¿Tenes preguntas?
        <span
          className="italic text-4xl md:text-[3.25rem] xl:text-[3.5rem] tracking-wide"
          style={{ fontFamily: "instrument-serif" }}
        >
          {" "}
          Contáctanos
        </span>
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[45rem] xl:w-[50rem] mx-auto pb-0 md:pb-4"
        style={{ fontFamily: "Satoshi" }}
      >
        <span className="hidden md:inline">
          ¿Tenes alguna duda sobre el sistema o queres consultar algo en
          general?
        </span>{" "}
        Completa el formulario y te respondemos en un plazo de 2 días hábiles.
      </h4>

      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="flex flex-col mx-auto max-w-[45rem] xl:max-w-[52rem] pt-7 justify-center gap-y-5 px-4">
            <div className="flex justify-center">
              <ModalScheduleMeet />
            </div>
            <div className="flex flex-col">
              <label className="text-xs xl:text-sm font-medium mb-2.5">
                Nombre y Apellido
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <UsersIconIndividual
                    className="size-[1.1rem] text-[#A0A0A0]"
                    strokeWidth="2"
                  />
                  <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                </div>
                <input
                  type="text"
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  placeholder="Nombre y Apellido"
                />
              </div>
              {errors.firstname && touched.firstname && (
                <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                  {errors.firstname}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs xl:text-sm font-medium mb-2.5">Email</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <MailIcon
                    className="size-[1.1rem] text-[#A0A0A0]"
                    strokeWidth="2"
                  />
                  <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                </div>
                <input
                  type="text"
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="nombre@correo.com"
                />
              </div>
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs xl:text-sm font-medium mb-2.5">Telefono</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <PhoneIcon
                    className="size-[1.1rem] text-[#A0A0A0]"
                    strokeWidth="2"
                  />
                  <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                </div>
                <input
                  type="text"
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="Numero de telefono"
                />
              </div>
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                  {errors.phone}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-xs xl:text-sm font-medium mb-2.5">
                Contanos sobre tu negocio
              </label>
              <div className="relative w-full">
                <div className="absolute pt-[.9375rem] left-3 flex items-center">
                  <MessageIcon
                    className="size-3 md:size-4 text-[#A0A0A0]"
                    strokeWidth="2.2"
                  />
                  <span className="w-[1px] lg:w-[2px] h-3 bg-[#eaeaea] mx-2"></span>
                </div>
                <textarea
                  rows={4}
                  className="w-full bg-[#FBFCFC] border-2 border-[#F3F3F3] rounded-[.625rem] text-[13px] p-3 lg:pl-12 pl-9 placeholder:text-[#A0A0A0] text-[#3e3e3e] placeholder:text-[13px] xl:placeholder:text-[14px] placeholder:px-0.5 focus:border-[#646464] focus:placeholder:text-[#bebebe] transition duration-500 focus:outline-none"
                  name="publicidad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.publicidad}
                  placeholder="Hola, quisiera saber más sobre..."
                />
              </div>
              {errors.publicidad && touched.publicidad && (
                <div className="text-red-500 text-xs xl:text-sm pt-2 pl-0.5">
                  {errors.publicidad}
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="group flex justify-center items-center bg-[#abff98] hover:bg-[#87fa6d] w-full text-[#000000] text-sm xl:text-base font-semibold rounded-xl px-5 py-3.5 transition-colors duration-500"
              >
                Enviar mensaje
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
