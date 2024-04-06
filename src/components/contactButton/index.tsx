import { FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Link
      to="/contato"
      title="UNITEC - Contato"
      className="hidden sm:fixed bottom-10 rounded-full hover:bg-neutral-700 duration-150 transition-all ease-in-out right-4 z-50 text-3xl text-white p-4 sm:flex justify-center items-center gap-3 bg-neutral-800"
    >
      <FaHeadphones />
    </Link>
  );
};

export { ContactButton };
