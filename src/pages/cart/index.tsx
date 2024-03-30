import { FaX } from "react-icons/fa6";

const CartPage = () => {
  return (
    <div className="flex-1 py-5">
      <div className="w-4/5 m-auto flex flex-col gap-6 ">
        <h3 className="text-start text-3xl drop-shadow-lg">
          Carrinho de cursos
        </h3>

        <table className="w-full bg-white border">
          <thead>
            <tr>
              <th className="border border-neutral-500 text-center">Curso</th>
              <th className="border border-neutral-500 text-center">valor</th>
              <th className="border border-neutral-500"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center border border-neutral-300">
                <div className="p-2 flex gap-4">
                  <img
                    className="w-20 h-12 rounded shadow-md"
                    src="https://www.iped.com.br/img/cursos/imagem-cursos/45635.jpg"
                    alt=""
                  />
                  <div>
                    <h3 className="text-neutral-900 font-semibold text-start">
                      Inglês Básico I
                    </h3>
                    <p className="text-neutral-700">
                      Inicio: Imediato | Término: em 30 dias
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-center border border-neutral-300">teste</td>
              <td className="text-center border border-neutral-300">
                <FaX
                  className="m-auto text-red-600 cursor-pointer"
                  title="remover"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-3 justify-end">
          <button className="bg-gray-500 p-3 rounded w-fit text-white ">
            Limpar Carrinho
          </button>
          <button className="bg-green-600 p-3 rounded w-fit text-white ">
            Concluir Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
