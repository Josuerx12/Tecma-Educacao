import { useQuery } from "react-query";
import { useCourses } from "../../hooks/useCourses";
import { CoursesCard } from "../../components/cards/courses";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { fetchMostRated } = useCourses();

  const homeSlide = [
    {
      courseId: 118646,
      img: "https://www.iped.com.br/img/cursos/118646/118646-1.jpg",
      categorySlug: "gestao-e-lideranca",
      title: "Curso de Gestão da Produção Industrial",
      description:
        "Você conhecerá os tipos de capacidades produtivas, etapas do PPCP, PMP, técnicas administrativas, análise de dados, qualidade produtiva, manutenção corretiva, preventiva e preditiva, MTBF e MTTR, tipos de código de barras, tecnologias na Indústria 4.0 e muito mais.",
    },
    {
      courseId: 133921,
      img: "https://www.iped.com.br/img/cursos/133921/133921-2.jpg",
      title: "Curso de Práticas de Sustentabilidade",
      categorySlug: "ambiental",
      description:
        "Você aprenderá qual o conceito de sustentabilidade e sustentabilidade empresarial, critérios ASG, o que é economia circular, fontes de energia renovável, gestão de resíduos sólidos, construções sustentáveis, mercado de crédito de carbono, índices verdes na bolsa de valores e muito mais.",
    },
    {
      courseId: 117882,
      categorySlug: "publicidade-marketing",
      img: "https://www.iped.com.br/img/cursos/117882/117882-3.jpg",
      title: "Curso de Marketing na Gestão Empresarial",
      description:
        "Você verá temas como inteligência de mercado, value proposition creation, inovação e coopetição, mundo VUCA, marketing analytics, criação de valor, estratégias competitivas B2B, customer recovery, Saas Selling, Inbound e Outbound marketing, forecast, budgeting e muito mais.",
    },
  ];

  const navigate = useNavigate();

  const { data, isLoading } = useQuery("relevanceCourses", fetchMostRated);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  data?.COURSES.sort((a, b) => b.course_rating - a.course_rating);

  return (
    <div className="flex-1 flex flex-col pb-10 gap-3">
      <div className={`w-full m-auto`}>
        <Slider {...settings}>
          {homeSlide?.map((c) => {
            return (
              <div
                title="Clique em saiba mais para visualizar mais detalhes sobre o curso."
                key={c.courseId}
                className={`w-full h-[450px] z-10 bg-black bg-opacity-30`}
              >
                <img
                  src={c.img}
                  className="absolute w-svw h-[450px] z-[-1] object-cover"
                  alt=""
                />
                <div className="w-11/12 md:w-3/4 py-5 md:py-10 m-auto text-white flex flex-col h-full justify-around">
                  <h3 className=" drop-shadow-3xl text-xl md:text-3xl">
                    {c.title}
                  </h3>

                  <p className="w-72 md:w-3/6 font-light  drop-shadow-3xl text-ellipsis overflow-hidden line-clamp-4 md:text-xl text-justify">
                    {c.description}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/cursos/${c.categorySlug}/${c.courseId}`)
                    }
                    className="bg-neutral-50 md:text-xl text-neutral-800 font-normal w-fit p-3  rounded"
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-4 w-4/5 flex flex-col gap-6 m-auto">
        <h3 className="text-center text-3xl text-dark drop-shadow-lg">
          Cursos mais procurados
        </h3>
        <div className="flex justify-center gap-8 flex-wrap items-center">
          {isLoading ? (
            <div> </div>
          ) : (
            data?.COURSES.map((course) => (
              <CoursesCard key={course.course_id} course={course} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export { HomePage };
