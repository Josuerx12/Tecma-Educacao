import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { recoveryCredentials, useAuth } from "../../../store/useAuth";
import { useMutation } from "react-query";

const Recovery = () => {
  const { recovery } = useAuth();

  const { register, handleSubmit } = useForm<recoveryCredentials>();

  const { mutateAsync, isLoading, isSuccess, data } = useMutation(
    "recoveryAccount",
    recovery
  );

  async function onSubmit(data: recoveryCredentials) {
    await mutateAsync(data);
  }

  return (
    <div className="flex-1 flex flex-col items-center pt-10 gap-4">
      <h3 className="text-xl text-center ">
        Recuperação de acesso
        <span className="text-red-600 font-semibold uppercase">
          {" "}
          tecma Educação!
        </span>
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:min-w-96 w-full sm:w-fit rounded-lg p-3 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label>Email ou CPF:</label>
          <input
            {...register("user_email")}
            type="text"
            className="p-3 border border-black outline-red-500"
            placeholder="Insira seu Email ou CPF"
          />
        </div>
        {data && <p className="text-lg text-green-900">{data}</p>}
        <button
          disabled={isSuccess || isLoading}
          className="bg-red-500 p-2 rounded font-semibold text-white hover:bg-red-600"
        >
          Recuperar
        </button>
      </form>

      <div className="flex flex-col p-4 w-full justify-center items-center gap-3">
        <h4 className="text-xl drop-shadow-lg">Ainda não tem uma conta?</h4>
        <Link
          className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded text-lg"
          to="/auth/cadastre-se"
        >
          Matricule-se
        </Link>
      </div>
    </div>
  );
};

export default Recovery;
