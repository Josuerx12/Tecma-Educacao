import { PiCertificateBold } from "react-icons/pi";
import { ICertify } from "../../../hooks/useUtilities";
import { useAuth } from "../../../store/useAuth";

const CertifyCard = ({ cert }: { cert: ICertify }) => {
  const { user } = useAuth();
  return (
    <div
      className="bg-neutral-800 w-72 h-64 justify-between flex flex-col gap-2 p-2 text-white rounded-md"
      key={cert.course_id}
    >
      <h2 className="flex justify-between items-center">
        TECMA - Certificado <PiCertificateBold className="text-xl" />
      </h2>
      <h3 className="text-lg line-clamp-2 font-semibold drop-shadow-lg">
        {cert.course_title}
      </h3>
      <p>
        <span className="font-semibold drop-shadow-lg">Inicio: </span>
        {new Date(cert.course_date_start.replace(" ", "T")).toLocaleString(
          "pt-BR"
        )}
      </p>
      <p>
        <span className="font-semibold drop-shadow-lg">Fim: </span>
        {new Date(cert.course_date_conclusion.replace(" ", "T")).toLocaleString(
          "pt-BR"
        )}
      </p>
      <p>
        <span className="font-semibold drop-shadow-lg">Aluno: </span>{" "}
        {user?.user_first_name}
      </p>
      <a
        href={cert.course_certificate_personalized}
        target="_blank"
        title="TECMA - Baixar certificado!"
        className="bg-white text-neutral-900 p-2 rounded text-center font-bold hover:bg-neutral-200 transition-all duration-100 ease-linear"
      >
        Baixar certificado
      </a>
    </div>
  );
};

export default CertifyCard;
