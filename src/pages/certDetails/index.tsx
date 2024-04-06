import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useUtils } from "../../hooks/useUtilities";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/loading";

const CertDetailsPage = () => {
  const { certNumber } = useParams();
  const { certDetails } = useUtils();

  const { data, isLoading, refetch } = useQuery(
    "certDetail",
    () => certDetails(certNumber),
    {
      onSuccess: (data) => {
        if (data.ERROR) {
          toast.error(data.ERROR);
        }
      },
    }
  );

  useEffect(() => {
    if (certNumber) {
      refetch();
    }
  }, [certNumber]);

  return (
    <div className="flex-1">
      <div className="py-6 mx-auto w-11/12 flex flex-col gap-2 ">
        <h3 className="text-2xl drop-shadow-lg text-neutral-950">
          Autenticação do Certificado
        </h3>

        {isLoading ? (
          <Loading />
        ) : data && data.CERTIFICATE ? (
          <>
            <h3 className="text-xl drop-shadow-lg text-neutral-700">
              Certificado n.º {data?.CERTIFICATE.certificate_number}
            </h3>
            <p>
              <span className="font-bold">
                {data?.CERTIFICATE.certificate_user_name}
              </span>{" "}
              completou o{" "}
              <span className="font-bold">
                {data?.CERTIFICATE.certificate_course_title}
              </span>{" "}
              com sucesso!
            </p>

            <div className="flex flex-col gap-2 bg-red-500 w-fit rounded p-2 text-white">
              <p className="drop-shadow-lg">
                <span className="text-sm font-bold">Aluno:</span>{" "}
                {data?.CERTIFICATE.certificate_user_name}
              </p>
              <p className="drop-shadow-lg">
                <span className="text-sm font-bold">Curso:</span>{" "}
                {data?.CERTIFICATE.certificate_course_title}
              </p>
              <p className="drop-shadow-lg">
                <span className="text-sm font-bold">Início em:</span>{" "}
                {new Date(
                  data?.CERTIFICATE.certificate_date_start
                ).toLocaleString("pt-BR")}
              </p>
              <p className="drop-shadow-lg">
                <span className="text-sm font-bold">Término em:</span>{" "}
                {new Date(
                  data.CERTIFICATE.certificate_date_conclusion
                ).toLocaleString("pt-BR")}
              </p>
              <p className="drop-shadow-lg">
                <span className="text-sm font-bold">Carga horária:</span>{" "}
                {Math.abs(data?.CERTIFICATE.certificate_time_elapsed / 3600)}h
              </p>
            </div>
          </>
        ) : (
          <p>Nenhum certificado encontrado para o numero: {certNumber}</p>
        )}
      </div>
    </div>
  );
};

export default CertDetailsPage;
