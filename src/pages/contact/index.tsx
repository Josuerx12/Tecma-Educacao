import { useForm } from "react-hook-form";
import { ContactCredentials, useUtils } from "../../hooks/useUtilities";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const { handleSubmit, reset, register } = useForm<ContactCredentials>();
  const { contact } = useUtils();
  const { mutateAsync, isLoading, data } = useMutation("contact", contact, {
    onSuccess: (data) => {
      if (data.SUCCESS) {
        reset();
        toast.success(data.SUCCESS);
      }
    },
  });

  async function onSubmit(data: ContactCredentials) {
    await mutateAsync(data);
  }

  return (
    <div className="flex-1">
      <div className="py-6 mx-auto w-11/12 flex flex-col gap-2 relative">
        <a
          href="https://wa.me/5512991400408"
          target="_blank"
          className="absolute top-10 right-0 text-xl flex gap-2 items-center bg-green-600 rounded border-2 border-green-900 z-20 text-white p-2 cursor-pointer hover:bg-green-500 transition-colors duration-150 ease-linear"
        >
          Contato via <FaWhatsapp />
        </a>
        <h3 className="text-3xl font-semibold drop-shadow-lg text-neutral-900 capitalize">
          Fale conosco
        </h3>
        <h6 className="text-lg drop-shadow-lg text-neutral-800">
          Nossa equipe está pronta para te atender.
        </h6>
        <h6 className="text-lg drop-shadow-lg text-neutral-800">
          Fale{" "}
          <a
            href="https://wa.me/5512991400408"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            via whatsapp
          </a>{" "}
          ou formulário abaixo.
        </h6>

        <form
          className="py-5 flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label>Nome:</label>
            <input
              {...register("user_name")}
              type="text"
              className="p-3 border border-black outline-red-500"
              placeholder="Jonh Doe"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email:</label>
            <input
              {...register("user_email")}
              type="text"
              className="p-3 border border-black outline-red-500"
              placeholder="jonhDoe@email.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Menssagem:</label>

            <textarea
              className="p-3 border border-black outline-red-500"
              rows={10}
              {...register("message")}
            ></textarea>
          </div>

          {data?.ERROR && (
            <p className="text-red-500">
              <span className="text-red-700 font-bold">Error: </span>{" "}
              {data.ERROR}
            </p>
          )}

          <button
            type="submit"
            className="w-fit px-5 py-2 bg-red-600 text-white text-lg rounded hover:bg-red-500 cursor-pointer"
            disabled={isLoading}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
