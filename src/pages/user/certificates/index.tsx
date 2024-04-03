import { useQuery } from "react-query";
import { useUtils } from "../../../hooks/useUtilities";
import Loading from "../../../components/loading";

const CertifiesPage = () => {
  const { fetchCertifies } = useUtils();

  const { data, isLoading } = useQuery("userCertifies", fetchCertifies);

  console.log(data);

  return (
    <div className="flex-1">
      <h3 className="text-center text-2xl drop-shadow-lg">Seus certificados</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {data?.map((cert) => (
            <div key={cert.course_id}>
              <h2>{cert.course_title}</h2>
              <p>{cert.course_date_start}</p>
              <p>{cert.course_date_conclusion}</p>
              <a href={cert.course_certificate_pdf} target="_blank">
                Baixar certificado
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertifiesPage;
