import { useQuery } from "react-query";
import { useCourses } from "../../hooks/useCourses";
import { CoursesCard } from "../../components/cards/courses";
import Slider from "react-slick";
import { useUtils } from "../../hooks/useUtilities";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { fetchMostRated } = useCourses();
  const { fetchCategoriesWithCourses } = useUtils();

  const navigate = useNavigate();

  const { data, isLoading } = useQuery("relevanceCourses", fetchMostRated);
  const categories = useQuery(
    "categoriesWithCourses",
    fetchCategoriesWithCourses
  ).data;

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
          {categories?.map((c) => {
            const slug = c.category_courses[0].course_title.replace(/-/g, " ");
            return (
              <div
                title="Clique em saiba mais para visualizar mais detalhes sobre o curso."
                key={c.category_id}
                className={`w-full h-[450px] z-10 bg-black bg-opacity-20`}
              >
                <img
                  src={c.category_courses[0].course_slideshow[0]}
                  className="absolute w-svw h-[450px] z-[-1] object-fit"
                  alt=""
                />
                <div className="w-11/12 md:w-3/4 py-5 md:py-10 m-auto text-white flex flex-col h-full justify-around">
                  <h3 className="font-normal drop-shadow-2xl text-xl md:text-3xl">
                    {slug}
                  </h3>

                  <p className="w-72 md:w-3/6 font-light  drop-shadow-2xl text-ellipsis overflow-hidden line-clamp-4 md:text-xl text-justify">
                    {c.category_courses[0].course_description.replace(//g, " ")}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/curso/${c.category_courses[0].course_id}`)
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
        <h3 className="text-center font-semibold text-3xl text-dark">
          Cursos mais procurados
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
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
