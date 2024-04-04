import { useQuery } from "react-query";
import { useAuth } from "../../../store/useAuth";
import { Link } from "react-router-dom";
import { useUtils } from "../../../hooks/useUtilities";
import Loading from "../../../components/loading";
import UserCourseCard from "../../../components/cards/userCourses";

const UserCourses = () => {
  const { fetchCategoriesWithCourses } = useUtils();
  const { user } = useAuth();

  const { data, isLoading } = useQuery("userCourses", () =>
    fetchCategoriesWithCourses({ user_id: String(user?.user_id) })
  );

  return (
    <div className="flex-1">
      <div className="w-11/12 flex m-auto flex-col gap-6 p-4">
        <h2 className="text-3xl drop-shadow-lg text-center capitalize">
          Meus Cursos
        </h2>

        {isLoading ? (
          <Loading />
        ) : data ? (
          <div className="flex flex-col gap-4">
            {data.map((category) => {
              return (
                <div className="flex flex-col gap-3" key={category.category_id}>
                  <h3 className="text-lg drop-shadow-lg">
                    {category.category_title}
                  </h3>
                  <div className="flex flex-wrap gap-4 relative">
                    {category.category_courses.map((course) => {
                      return (
                        <UserCourseCard
                          key={course.course_id}
                          course={course}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-6">
            <p className="text-xl">Nenhum curso encontrado para sua conta!</p>

            <p>
              <Link className="text-blue-500" to="/">
                Navegue pelas areas
              </Link>{" "}
              e econtre seu curso.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCourses;
