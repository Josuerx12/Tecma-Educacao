import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { CoursesCard } from "../../../components/cards/courses";
import { useCourses } from "../../../hooks/useCourses";
import { useEffect } from "react";
import Loading from "../../../components/loading";
import Slider from "react-slick";

const CoursesByCategory = () => {
  const { categorySlug } = useParams();

  const { fetchByCategoryCourses } = useCourses();

  const { data, isLoading, refetch } = useQuery("coursesByCategory", () =>
    fetchByCategoryCourses(categorySlug ? categorySlug : "")
  );

  useEffect(() => {
    refetch();
  }, [categorySlug]);

  const nome = data ? [...data] : [];

  nome?.sort((a, b) => b.course_rating - a.course_rating);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  const navigate = useNavigate();

  return (
    <div className="flex-1">
      <Slider {...settings}>
        {data?.map((c) => {
          return (
            <div
              title="Clique em saiba mais para visualizar mais detalhes sobre o curso."
              key={c.course_id}
              className={`w-full h-[450px] z-10 bg-black bg-opacity-40`}
            >
              <img
                src={c.course_slideshow[0]}
                className="absolute w-svw h-[450px] z-[-1] object-cover"
                alt=""
              />
              <div className="relative w-11/12 md:w-3/4 py-5 md:py-10 m-auto text-white flex flex-col h-full justify-around">
                <h3 className=" drop-shadow-3xl text-xl md:text-3xl capitalize">
                  {c.course_title}
                </h3>

                <p className="w-72 md:w-3/6 font-light  drop-shadow-3xl text-ellipsis overflow-hidden line-clamp-4 md:text-xl text-justify">
                  {c.course_description}
                </p>

                <button
                  onClick={() =>
                    navigate(`/cursos/${c.course_category_slug}/${c.course_id}`)
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

      <div className="w-11/12 py-10 m-auto flex flex-col gap-4">
        <h3 className="capitalize text-3xl drop-shadow-lg text-center">
          Cursos {categorySlug?.replace(/-/g, " ")}
        </h3>
        <div className="w-full justify-center flex flex-wrap gap-8">
          {isLoading ? (
            <Loading />
          ) : (
            nome?.map((course) => (
              <CoursesCard key={course.course_id} course={course} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export { CoursesByCategory };
