import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CoursesCard } from "../../../components/cards/courses";
import { useCourses } from "../../../hooks/useCourses";
import { useEffect } from "react";
import Loading from "../../../components/loading";

const CoursesBySearch = () => {
  const { pesquisa } = useParams();

  const { fetchBySearch } = useCourses();

  const { data, isLoading, refetch } = useQuery("CoursesBySearch", () =>
    fetchBySearch(pesquisa)
  );

  useEffect(() => {
    refetch();
  }, [pesquisa]);

  const nome = data ? [...data] : [];

  nome?.sort((a, b) => b.course_rating - a.course_rating);

  return (
    <div className="flex-1">
      <div className="w-11/12 py-10 m-auto flex flex-col gap-4">
        <h3 className="capitalize text-3xl drop-shadow-lg text-start">
          Busca por: {pesquisa}
        </h3>
        <div className="w-full flex flex-wrap gap-8">
          {isLoading ? (
            <Loading />
          ) : nome && nome.length > 0 ? (
            nome.map((course) => (
              <CoursesCard key={course.course_id} course={course} />
            ))
          ) : (
            <p>Nenhum curso encontrado refaça sua pesquisa!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { CoursesBySearch };
