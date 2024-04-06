import { FaEdit } from "react-icons/fa";
import { useAuth } from "../../../store/useAuth";
import { FaLocationPinLock } from "react-icons/fa6";
import { useUtils } from "../../../hooks/useUtilities";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { IEditUserCredentials } from "../../../interfaces/IEditUser";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { user, getUser } = useAuth();

  const { editUser } = useUtils();

  const [isEditing, setIsEditing] = useState(false);

  const { mutateAsync, data } = useMutation("editUser", editUser, {
    onSuccess: (data) => {
      if (data.SUCCESS) {
        Promise.all([
          getUser(),
          reset(),
          setIsEditing(false),
          window.scrollTo({ top: 0, behavior: "smooth" }),
          toast.success(data.SUCCESS),
        ]);
      }
      if (data.ERROR) {
        toast.error(
          "Erro ao editar o seu usuário, verifique as credenciais e tente novamente!"
        );
      }
    },
  });

  const { register, handleSubmit, reset } = useForm<IEditUserCredentials>({
    defaultValues: {
      user_address: user?.user_address.address_street,
      user_email: user?.user_email,
      user_postalcode: user?.user_address.address_postalcode,
      user_city: user?.user_address.address_city,
      user_neighborhood: user?.user_address.address_neighborhood,
      user_photo: undefined,
    },
  });

  async function onSubmit(data: IEditUserCredentials) {
    await mutateAsync(data);
  }

  return (
    <div className="flex-1">
      <div className="py-6 mx-auto w-10/12 flex flex-col gap-2 relative">
        <div className="flex justify-between gap-2">
          <h6 className="text-3xl font-bold">
            Perfil de {user?.user_first_name}
          </h6>
          {!isEditing && (
            <button
              onClick={() => setIsEditing((prev) => !prev)}
              className="text-nowrap h-fit bg-red-600 hover:bg-red-500 transition-colors duration-200 ease-in-out flex gap-2 items-center p-2 text-white rounded"
            >
              Editar Perfil <FaEdit />
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center sm:justify-normal gap-10 bg-neutral-800 flex-grow text-white p-2 rounded drop-shadow-md">
          <div className="flex flex-col items-center gap-3">
            <img
              src={user?.user_image}
              alt="Foto do usuário"
              className="w-56 g-56 rounded-full m-auto drop-shadow-lg"
            />
            <span className="font-semibold">Foto de Perfil</span>
          </div>

          <div className="">
            <p>
              <span className="font-semibold">Cursos em progresso: </span>
              {user?.user_dashboard.dashboard_courses_inprogress}
            </p>
            <p>
              <span className="font-semibold">Cursos Concluídos: </span>
              {user?.user_dashboard.dashboard_courses_completed}
            </p>
            <p className="flex gap-2 items-center mt-10">
              <FaLocationPinLock /> {user?.user_address.address_city}
            </p>
            <p>
              <span className="font-semibold">Pontos de incentivo: </span>
              {user?.user_ranking.user_points.total}
            </p>
            <p className="flex items-center">
              Ranking:
              <img
                src={user?.user_ranking.user_level.level_image}
                className="w-10 h-10"
              />{" "}
              {user?.user_ranking.user_level.level_name}{" "}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label>Nome Completo:</label>
            <input
              value={user?.user_name}
              disabled
              type="text"
              className="p-3 border bg-gray-300 border-black outline-red-500"
              placeholder="Jonh Doe"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>CPF:</label>
            <input
              value={user?.user_cpf}
              disabled
              type="text"
              className="p-3 border bg-gray-300 border-black outline-red-500"
              placeholder="Jonh Doe"
            />
          </div>

          {isEditing && (
            <>
              <div className="flex flex-col gap-1">
                <label>Email:</label>
                <input
                  defaultValue={user?.user_email}
                  {...register("user_email")}
                  type="text"
                  className="p-3 border  border-black outline-red-500"
                  placeholder="Jonh Doe"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Nova Foto:</label>
                <input
                  {...register("user_photo")}
                  type="file"
                  accept="image/*"
                />
              </div>

              <h4 className="text-xl text-neutral-700">Endereço</h4>

              <div className="flex flex-col gap-1">
                <label>CEP:</label>
                <input
                  defaultValue={user?.user_address.address_postalcode}
                  {...register("user_postalcode")}
                  type="text"
                  className="p-3 border  border-black outline-red-500"
                  placeholder="28000-000"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Endereço Completo:</label>
                <input
                  defaultValue={user?.user_address.address_street}
                  {...register("user_address")}
                  type="text"
                  className="p-3 border  border-black outline-red-500"
                  placeholder="rua sem nome, n 10"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Bairro:</label>
                <input
                  defaultValue={user?.user_address.address_neighborhood}
                  {...register("user_neighborhood")}
                  type="text"
                  className="p-3 border  border-black outline-red-500"
                  placeholder="28000-000"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Cidade:</label>
                <input
                  defaultValue={user?.user_address.address_city}
                  {...register("user_city")}
                  type="text"
                  className="p-3 border  border-black outline-red-500"
                  placeholder="Seu bairro"
                />
              </div>
              {data?.ERROR && (
                <p className="text-red-500">
                  <span className="text-red-700 font-bold">Error: </span>
                  {data.ERROR}
                </p>
              )}

              <div className="flex w-full flex-wrap gap-2">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="basis-96 flex-grow bg-red-600 hover:bg-red-500 duration-200 transition-colors ease-in-out p-2 rounded text-white font-semibold"
                >
                  Cancelar
                </button>
                <button className="basis-96 flex-grow bg-blue-600 hover:bg-blue-500 duration-200 transition-colors ease-in-out p-2 rounded text-white font-semibold">
                  Salvar
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
