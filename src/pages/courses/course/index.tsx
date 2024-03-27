/* eslint-disable prefer-const */
import { useParams } from "react-router-dom";
import { useCourses } from "../../../hooks/useCourses";
import { useQuery } from "react-query";
import { FaCertificate, FaClock, FaStar } from "react-icons/fa";
import Slider from "../../../components/slider";

const CoursePage = () => {
  const { courseId } = useParams();

  const { fetchOneCourse } = useCourses();

  const { data } = useQuery("course", () =>
    fetchOneCourse(courseId ? courseId : "")
  );

  const getYouTubeVideoId = (url?: string) => {
    const match = url?.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
    );
    return match && match[1];
  };

  const videoId = getYouTubeVideoId(data?.COURSES[0].course_video);

  return (
    <div className="flex-1">
      <div className=" w-4/5 m-auto mt-6 flex gap-3 justify-center md:justify-between flex-wrap-reverse">
        <div className="md:flex-1 basis-96 text-neutral-900 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center">
            {data?.COURSES[0].course_title}
          </h2>
          <div className="w-full md:w-[70%] mx-auto">
            <Slider slides={data?.COURSES[0].course_slideshow} />
          </div>
          <p>
            Alunos:
            <span className="font-bold">
              {data?.COURSES[0].course_students}
            </span>
          </p>
          <p className="flex gap-1">
            <span>Avaliação: </span>
            <div className="flex gap-1 items-center">
              {data?.COURSES[0].course_rating &&
                data &&
                Array.from(
                  Array(parseInt(String(data.COURSES[0].course_rating)))
                ).map((_, i) => (
                  <FaStar className="text-yellow-500" key={i} />
                ))}{" "}
              <span className="font-bold">
                {data?.COURSES[0].course_rating}
              </span>
            </div>
          </p>

          {data?.COURSES[0].course_teacher.teacher_name && (
            <div className="relative bg-white w-fit p-3 rounded shadow">
              <img
                className="m-auto rounded"
                src={data?.COURSES[0].course_teacher.teacher_image}
                alt=""
              />
              <p>
                <span className="font-bold">Professor: </span>
                {data?.COURSES[0].course_teacher.teacher_name}
              </p>
              <p>
                <span className="font-bold">Descrição: </span>
                {data?.COURSES[0].course_teacher.teacher_description}
              </p>
            </div>
          )}
        </div>

        <div className="md:h-screen">
          <div className="bg-white shadow p-2 rounded flex flex-col gap-3">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded w-full md:w-96 h-64 "
            ></iframe>

            <p className="text-3xl font-bold text-center text-neutral-900">
              {data?.COURSES[0].course_price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <div className="flex flex-col gap-2">
              <button className="w-full bg-red-500 p-2 text-white text-lg font-semibold transition-all ease-in-out duration-200 hover:bg-red-600">
                Adicionar ao carrinho
              </button>
              <button className="w-full border-neutral-900 border  p-2 text-neutral-900 text-lg font-semibold transition-all ease-in-out duration-200 hover:bg-neutral-200">
                Comprar agora
              </button>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900">
                Esse curso inclui:
              </h3>

              <p className="flex items-center gap-1 text-neutral-700">
                <FaClock /> {data?.COURSES[0].course_hours} Horas sob demanda
              </p>
              <p className="flex items-center gap-1 text-neutral-700">
                <FaCertificate /> Certificado ao final do curso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
