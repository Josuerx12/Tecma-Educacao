import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../../store/useAuth";
import { useMutation } from "react-query";

type credentials = {
  login: string;
  password: string;
};

const Login = () => {
  const { login, getUser } = useAuth();

  const { mutateAsync, isLoading } = useMutation("login", login, {
    onSuccess: () => Promise.all([getUser()]),
  });

  const { register, handleSubmit } = useForm<credentials>();

  async function onSubmit(data: credentials) {
    const loginCredentials = new FormData();

    loginCredentials.append("user_email", data.login);
    loginCredentials.append("user_password", data.password);

    await mutateAsync(loginCredentials);
  }

  return (
    <div className="flex-1 flex flex-col items-center pt-10 gap-4">
      <h3 className="text-xl text-center ">
        Autentique-se para acessar a plataforma da
        <span className="text-red-600 font-semibold"> UNITEC!</span>
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-96 rounded-lg p-3 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label>Email ou CPF:</label>
          <input
            {...register("login")}
            type="text"
            className="p-3 border border-black outline-red-500"
            placeholder="jonhDoe@email.com ou 123.456.789-10"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Senha:</label>
          <input
            {...register("password")}
            type="password"
            className="p-3 border border-black outline-red-500"
            placeholder="*******"
          />
        </div>
        <Link
          to="/auth/recovery"
          title="Unitec - Recuperar senha"
          className="text-blue-800 w-fit hover:text-blue-500"
        >
          Esqueci minha senha.
        </Link>
        <Link
          to="/auth/cadastre-se"
          title="Unitec - Cadastre-se"
          className="text-blue-800 w-fit hover:text-blue-500"
        >
          Clique aqui para criar seu acesso.
        </Link>

        <button
          disabled={isLoading}
          className="bg-red-500 p-2 rounded font-semibold text-white hover:bg-red-600"
        >
          Fazer login
        </button>
      </form>
    </div>
  );
};

export { Login };
