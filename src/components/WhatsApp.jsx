import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Open a direct message to the owner
    window.open("https://wa.me/+447951793541", "_blank");
  };

  return (
    <div
      className="bg-[#5454D4] rounded-lg px-4 py-1"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        cursor: "pointer",
        display: "flex",
      }}
      onClick={handleWhatsAppClick}
    >
      <h1 className="text-white font-serif text-[3.5vw] lg:text-[1.5vw] pt-4  pr-3 animate-bounce">
        ChatNow
      </h1>
      <FaWhatsapp style={{ width: "50px", height: "40px", color: "white" }} />
    </div>
  );
};

export default WhatsAppButton;
