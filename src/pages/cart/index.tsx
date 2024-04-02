import { FaX } from "react-icons/fa6";
import { useCart } from "../../store/useCart";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";
import { useUtils } from "../../hooks/useUtilities";
import { useMutation } from "react-query";

const CartPage = () => {
  const { removeCart, cleanCart, cart } = useCart();
  const { user } = useAuth();
  const { createCart } = useUtils();

  const totalToPay = cart.reduce((acc, item) => acc + item.value, 0);

  const { mutateAsync } = useMutation("createCart", createCart, {
    onSuccess: (data) => {
      const newTab = window.open(data.PAYMENT.payment_url, "_blank");
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        window.location.href = data.PAYMENT.payment_url;
      }
      cleanCart();
      navigate("/");
    },
  });

  const navigate = useNavigate();

  return (
    <div className="flex-1 py-5">
      <div className="w-4/5 m-auto flex flex-col gap-6 ">
        <h3 className="text-start text-3xl drop-shadow-lg">
          Carrinho de cursos
        </h3>

        {cart.length > 0 ? (
          <table className="w-full bg-white border">
            <thead>
              <tr>
                <th className="border border-neutral-500 text-center">Curso</th>
                <th className="border border-neutral-500 text-center">valor</th>
                <th className="border border-neutral-500"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.courseId}>
                    <td className="text-center border border-neutral-300">
                      <div className="p-2 flex flex-wrap justify-center md:justify-start gap-4">
                        <img
                          className="w-20 h-12 rounded shadow-md"
                          src={item.courseImg}
                          alt={item.courseName}
                        />
                        <div className="text-center">
                          <h3 className="text-neutral-900 font-semibold text-center md:text-start">
                            {item.courseName}
                          </h3>
                          <p className="text-neutral-700 text-center md:text-start ">
                            Inicio: {item.startAt} | Término: {item.duration}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center border border-neutral-300">
                      {item.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="text-center border border-neutral-300">
                      <FaX
                        onClick={() => removeCart(item.courseId)}
                        className="m-auto text-red-600 cursor-pointer"
                        title="remover"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="py-6">
            <p className="text-xl">Seu carrinho está vazio.</p>

            <p>
              <Link className="text-blue-500" to="/">
                Navegue pelas areas
              </Link>{" "}
              e econtre seu curso.
            </p>
          </div>
        )}
        {cart.length > 0 && (
          <div className="flex flex-col gap-3 items-end">
            <p className="text-xl">
              Total:{" "}
              <span className="font-bold">
                {totalToPay.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>
            <div className="flex gap-3">
              <button
                onClick={cleanCart}
                className="bg-gray-500 p-3 rounded w-fit text-white "
              >
                Limpar Carrinho
              </button>
              {user ? (
                <button
                  onClick={async () =>
                    await mutateAsync({
                      course_id: cart.map((item) => item.courseId),
                      user_id: String(user?.user_id),
                    })
                  }
                  className="bg-green-600 p-3 rounded w-fit text-white "
                >
                  Concluir Compra
                </button>
              ) : (
                <button
                  onClick={() => navigate("/auth/login")}
                  className="bg-blue-600 p-3 rounded w-fit text-white "
                >
                  Fazer Login para concluir compra
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
