import { useQuery } from "react-query";
import { useUtils } from "../../../hooks/useUtilities";
import Loading from "../../../components/loading";
import CertifyCard from "../../../components/cards/certifyCard";
import { Link } from "react-router-dom";

const CertifiesPage = () => {
  const { fetchCertifies } = useUtils();

  const { data, isLoading } = useQuery("userCertifies", fetchCertifies);

  return (
    <div className="flex-1">
      <div className="w-11/12 flex m-auto flex-col gap-6 p-4">
        <h3 className="text-center text-2xl drop-shadow-lg">
          Seus certificados
        </h3>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex gap-4 flex-wrap">
            {data && data.length > 0 ? (
              data.map((cert) => (
                <CertifyCard key={cert.course_id} cert={cert} />
              ))
            ) : (
              <div className="py-6">
                <p className="text-xl">
                  Nenhum curso foi concluido para emitir certificado ainda!
                </p>

                <p>
                  <Link className="text-blue-500" to="/usuario/cursos">
                    Vá para sala de aula
                  </Link>{" "}
                  e conclua algum curso de sua preferencia! :)
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertifiesPage;
