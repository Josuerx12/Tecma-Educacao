import { FaArrowDown, FaCertificate, FaUser, FaVideo } from "react-icons/fa";
import { useAuth } from "../../store/useAuth";
import { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function handleNavigate(path: string) {
    setIsOpen(false);
    navigate(path);
  }

  return (
    <div className="w-full">
      <button
        className="w-full justify-between flex gap-2 py-1 px-2 items-center bg-neutral-900 text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={user?.user_image_small}
          alt={user?.user_name}
        />
        <span>{user?.user_first_name}</span>{" "}
        <FaArrowDown
          className={`transition-all ease-linear duration-150 ${
            isOpen && "rotate-180"
          }`}
        />
      </button>

      <ul
        className={`${
          isOpen ? "relative sm:absolute" : "hidden"
        }  z-50 m-auto top-16 rounded shadow-lg right-0 p-2 bg-neutral-100 w-64 flex flex-col gap-2 text-sm overflow-auto`}
      >
        <li
          onClick={() => handleNavigate("/perfil")}
          className="flex transition-all ease-in-out duration-150 gap-2 justify-between items-center p-1 cursor-pointer font-semibold hover:text-white hover:bg-neutral-600 rounded"
        >
          Perfil <FaUser />
        </li>
        <li
          onClick={() => handleNavigate("/certificados")}
          className="flex transition-all ease-in-out duration-150 gap-2 justify-between items-center p-1 cursor-pointer font-semibold hover:text-white hover:bg-neutral-600 rounded"
        >
          Certificados <FaCertificate />
        </li>
        <li
          onClick={() => handleNavigate("/cursos")}
          className="flex transition-all ease-in-out duration-150 gap-2 justify-between items-center p-1 cursor-pointer font-semibold hover:text-white hover:bg-neutral-600 rounded"
        >
          Meus Cursos <FaVideo />
        </li>
        <hr />
        <li className="flex transition-all ease-in-out duration-150 gap-2 justify-between p-1 cursor-pointer font-semibold hover:bg-neutral-900 hover:text-white items-center rounded">
          Sair <LuLogOut />
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
