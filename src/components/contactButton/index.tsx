import { FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Link
      to="/contato"
      title="UNITEC - Contato"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hidden sm:fixed sm:flex bottom-10 rounded-full hover:bg-red-700 duration-150 hover:text-white transition-all ease-in-out right-4 z-50 text-3xl text-neutral-200 p-4 flex-col justify-center items-center gap-1 bg-red-600"
    >
      <FaHeadphones />
      <span className="text-sm">Contato</span>
    </Link>
  );
};

export { ContactButton };
