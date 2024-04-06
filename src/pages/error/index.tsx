import { CiFaceFrown } from "react-icons/ci";

const ErrorPage = () => {
  return (
    <div className="flex-1">
      <div className="py-6 mx-auto w-11/12 flex flex-col gap-2 relative">
        <h6 className="text-3xl font-bold text-center">
          Pagina não encontrada
        </h6>

        <CiFaceFrown className="text-[10rem] text-red-500 m-auto" />

        <h6 className="text-3xl font-bold text-center text-neutral-800 flex flex-col">
          Error 404
        </h6>
      </div>
    </div>
  );
};

export default ErrorPage;
