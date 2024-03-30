import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";
import { useQuery } from "react-query";
import { useUtils } from "../../hooks/useUtilities";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTicket } from "react-icons/fa6";

type SearchProp = {
  search: string;
};

const Navbar = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<SearchProp>();

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const { user } = useAuth();

  const { fetchCategories } = useUtils();

  const { data } = useQuery("categories", fetchCategories);

  function onSearch(data: SearchProp) {
    if (data.search) {
      navigate("/cursosPorPesquisa/" + data.search);
      setIsOpenDropDown(false);
    }
  }

  return (
    <nav className=" flex gap-3 justify-between bg-white shadow-md p-4 items-center">
      <button className="md:hidden text-2xl">
        <IoMenu />
      </button>

      <img
        onClick={() => navigate("/")}
        className="w-44 h-14 cursor-pointer object-cover"
        title="Unitec Educação - Pagina Inicial"
        src="/unitecLogo2.jpeg"
      />

      <div className="relative hidden md:block">
        <button
          className=""
          type="button"
          onMouseEnter={() => setIsOpenDropDown(true)}
          onTouchStart={() => setIsOpenDropDown(true)}
          onClick={() => setIsOpenDropDown((prev) => !prev)}
        >
          Categorias
        </button>
        <ul
          className={`${
            isOpenDropDown ? "absolute" : "hidden"
          } absolute z-50 m-auto top-14 rounded shadow-lg left-0 p-2 bg-neutral-100 w-64 h-96 flex flex-col gap-2 text-sm overflow-auto`}
          onMouseLeave={() => setIsOpenDropDown(false)}
        >
          {data?.map((category) => (
            <li
              onClick={() => {
                navigate("/cursos/" + category.category_slug);
                setIsOpenDropDown(false);
              }}
              key={category.category_id}
              className=" hover:bg-white w-full p-2 text-start cursor-pointer"
            >
              {category.category_title}
            </li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit(onSearch)}
        className="w-2/4 hidden md:flex items-center gap-1 justify-between"
      >
        <input
          {...register("search")}
          className="outline-red-400 border border-gray-200 rounded-full p-2 flex-1 "
          type="text"
          placeholder="Pequise algum curso por seu nome!"
        ></input>
        <button
          title="buscar"
          className="bg-red-500 hover:bg-red-600 p-3 transition ease-in-out duration-100 rounded-full text-white"
        >
          <FaSearch />
        </button>
      </form>

      <ul className="flex items-center gap-2">
        <button className="md:hidden text-neutral-900">
          <FaSearch />
        </button>
        <Link to="/carrinho" className="md:mx-4">
          <HiOutlineShoppingCart className="text-2xl text-neutral-900" />
        </Link>
      </ul>

      <ul
        className={`hidden md:${user ? "hidden" : "flex"} gap-2 items-center`}
      >
        <li
          title="Unitec - Fazer Login"
          onClick={() => navigate("/resgatar/cupom")}
          className="border border-neutral-900 p-2 transition ease-in-out duration-100 font-semibold text-neutral-900 text-sm flex gap-2 items-center cursor-pointer bg-neutral-50 hover:bg-neutral-200"
        >
          <FaTicket /> Resgatar Código
        </li>
        <li
          title="Unitec - Acesse"
          onClick={() => navigate("/auth/login")}
          className="border border-neutral-900 p-2 font-semibold transition ease-in-out gap-2 duration-100 bg-neutral-900 text-white text-sm flex items-center cursor-pointer hover:bg-neutral-800"
        >
          <FaUser /> Acessar
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
