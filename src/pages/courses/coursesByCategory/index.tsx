import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CoursesCard } from "../../../components/cards/courses";
import { useCourses } from "../../../hooks/useCourses";
import { useEffect } from "react";
import Loading from "../../../components/loading";

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

  return (
    <div className="flex-1">
      <div className="w-11/12 py-10 m-auto flex flex-col gap-4">
        <h3 className="capitalize text-3xl drop-shadow-lg text-center">
          Cursos {categorySlug?.replace(/-/g, " ")}
        </h3>
        <div className="w-full flex flex-wrap gap-8">
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
