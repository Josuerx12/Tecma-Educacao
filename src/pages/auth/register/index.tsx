import { Link } from "react-router-dom";
import { useUtils } from "../../../hooks/useUtilities";
import { useForm } from "react-hook-form";
import { RegisterCredentials, useAuth } from "../../../store/useAuth";
import { useMutation } from "react-query";

const Register = () => {
  const { countries, ocupationArea } = useUtils();

  const { register: registerUser } = useAuth();

  const { register, reset, handleSubmit } = useForm<RegisterCredentials>();

  const { mutateAsync, data } = useMutation("registerUser", registerUser, {
    onSuccess: (data) => {
      if (!data.ERROR) {
        reset();
      }
    },
  });

  async function onSubmit(data: RegisterCredentials) {
    await mutateAsync(data);
  }

  return (
    <div className="flex-1 flex flex-col items-center pt-10 gap-4">
      <h3 className="text-xl text-center ">
        Cadastre-se para acessar a plataforma da
        <span className="text-red-800 font-semibold uppercase">
          {" "}
          UNITEC Educação!
        </span>
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-96 rounded-lg p-3 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label>Nome:</label>
          <input
            type="text"
            className="p-3 border border-black outline-red-500"
            placeholder="John Doe"
            {...register("user_name")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email:</label>
          <input
            type="email"
            {...register("user_email")}
            className="p-3 border border-black outline-red-500"
            placeholder="jonhDoe@email.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>CPF:</label>
          <input
            type="text"
            {...register("user_cpf")}
            className="p-3 border border-black outline-red-500"
            placeholder="123.456.789-10 ou 12345678910"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>País</label>
          <select
            {...register("user_country")}
            className="p-3 border border-black outline-red-500"
          >
            <option value="">Selecione seu país de origem</option>
            {countries.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label>Aréa de atuação</label>
          <select
            {...register("user_occupation")}
            className="p-3 border border-black outline-red-500"
          >
            <option value="">Selecione sua área de atuação</option>
            {ocupationArea.map((area) => (
              <option key={area.id} value={area.id}>
                {area.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label>Senha:</label>
          <input
            {...register("user_password")}
            type="password"
            className="p-3 border border-black outline-red-500"
            placeholder="*******"
          />
        </div>
        <Link
          to="/auth/login"
          title="Unitec - Fazer login"
          className="text-blue-800 w-fit hover:text-blue-500"
        >
          Já possuo uma conta, fazer login.
        </Link>
        {data?.ERROR && (
          <p className="w-full bg-red-200 text-red-600">
            <span className="font-bold text-red-950">Error:</span>
            {data.ERROR}
          </p>
        )}
        <button className="bg-red-500 p-2 rounded font-semibold transition ease-in-out duration-100 text-white hover:bg-red-600">
          Cadastre-se
        </button>
      </form>
    </div>
  );
};

export { Register };
