/* eslint-disable prefer-const */
import { useParams } from "react-router-dom";
import { useCourses } from "../../../hooks/useCourses";
import { useMutation, useQuery } from "react-query";
import { FaCertificate, FaClock, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { CoursesCard } from "../../../components/cards/courses";
import { useEffect } from "react";
import ChapterDropDown from "../../../components/chapterDropdown";

const CoursePage = () => {
  const { courseId } = useParams();

  const { fetchOneCourse, fetchRelatedCourses } = useCourses();

  const relatedCourses = useMutation("relatedCourses", fetchRelatedCourses);

  const { data, refetch } = useQuery(
    "course",
    () => fetchOneCourse(courseId ? courseId : ""),
    {
      onSuccess: async (i) =>
        await relatedCourses.mutateAsync({
          categoryId: String(i.COURSES[0].course_category_id),
          courseId: String(i.COURSES[0].course_id),
        }),
    }
  );

  useEffect(() => {
    refetch();
  }, [courseId]);

  const getYouTubeVideoId = (url?: string) => {
    const match = url?.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
    );
    return match && match[1];
  };

  const videoId = getYouTubeVideoId(data?.COURSES[0].course_video);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className=" flex-1 ">
      <div className="w-11/12 m-auto flex gap-3 justify-center p-6 flex-wrap-reverse">
        <div className=" w-11/12 md:flex-1 basis-80 md:basis-96 text-neutral-900 flex flex-col gap-6">
          <h2 className="text-3xl drop-shadow-lg text-center capitalize">
            {data?.COURSES[0].course_title}
          </h2>

          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded md:w-full h-96 md:h-[500px] m-auto"
          ></iframe>

          <div className="flex flex-col gap-1">
            <p>
              <span className="font-bold">Descrição: </span>
              {data?.COURSES[0].course_description}
            </p>
            <p>
              <span className="mr-1 font-bold">Alunos:</span>
              {data?.COURSES[0].course_students}.
            </p>
            <p className="flex gap-1">
              <span className="font-bold">Avaliação: </span>
              <div className="flex gap-1 items-center">
                {data?.COURSES[0].course_rating &&
                  data &&
                  Array.from(
                    Array(Math.round(data.COURSES[0].course_rating))
                  ).map((_, i) => (
                    <FaStar className="text-yellow-500" key={i} />
                  ))}{" "}
                <span>{data?.COURSES[0].course_rating}</span>
              </div>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-3xl drop-shadow-lg">Conteúdo do curso</h3>
            {data?.COURSES[0].course_chapters.map((chapter, i) => (
              <ChapterDropDown chapter={chapter} key={i} index={i} />
            ))}
          </div>

          {data?.COURSES[0].course_teacher.teacher_name && (
            <div className=" gap-6 flex-wrap flex items-center bg-green-600 p-3 md:rounded shadow">
              <img
                className="m-auto rounded-full w-48 h-48 border-2 border-white"
                src={data?.COURSES[0].course_teacher.teacher_image}
                alt=""
              />
              <div className="text-neutral-50 flex basis-4/6 flex-grow flex-col gap-3">
                <h3 className="text-3xl font-bold">
                  <span className="text-2xl font-normal hidden md:inline-block">
                    Sobre o autor:{" "}
                  </span>
                  {data?.COURSES[0].course_teacher.teacher_name}
                </h3>
                <p className="text-pretty flex-col flex">
                  {data?.COURSES[0].course_teacher.teacher_description
                    .split(".")
                    .map((p, i) => (
                      <span key={i}>{p}.</span>
                    ))}
                </p>
              </div>
            </div>
          )}
          <h3 className="text-3xl drop-shadow-lg">Cursos relacionados</h3>
          <div className="relative w-full pb-3 flex flex-col ">
            <div className="absolute flex gap-2 w-full top-0 right-0 overflow-auto">
              {relatedCourses.data?.map((course) => (
                <CoursesCard course={course} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-96">
          <div className="bg-white shadow p-2 rounded flex flex-col gap-3">
            <Slider
              {...settings}
              className="w-full max-w-96 sm:max-w-[800px] mx-auto"
            >
              {data?.COURSES[0].course_slideshow.map((i) => (
                <img src={i} key={i} />
              ))}
            </Slider>

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

export { CoursePage };
