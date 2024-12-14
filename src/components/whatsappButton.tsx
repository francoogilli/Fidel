import Whatsapp from "../icons/whatsapp";

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=543564222935&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20info%20de%20Fidel&source=&data=" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-[#4fd73d] hover:bg-[#46c635] text-white rounded-full p-2.5 shadow-lg  transition duration-300"
    >
      <Whatsapp className="size-6" strokeWidth="1.9" />
    </a>
  );
};

export default WhatsappButton;
