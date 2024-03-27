import { useQuery } from "react-query";
import Slider from "../../components/slider";
import { useCourses } from "../../hooks/useCourses";
import { CoursesCard } from "../../components/cards/courses";

const HomePage = () => {
  const banners = ["/slide1.jpeg", "/slide2.jpg"];

  const { fetchMostRated } = useCourses();

  const { data, isLoading } = useQuery("relevanceCourses", fetchMostRated);

  return (
    <div className="flex-1 m-auto flex flex-col pt-10 items-center gap-3">
      <div className="w-4/5 md:w-[50%]">
        <Slider slides={banners} />
      </div>

      <div className="mt-4 w-4/5 flex flex-col gap-6">
        <h3 className="text-center font-bold text-2xl text-dark">
          Cursos mais avaliados
        </h3>
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
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
