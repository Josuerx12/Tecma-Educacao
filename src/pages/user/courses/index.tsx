import { useQuery } from "react-query";
import { useAuth } from "../../../store/useAuth";
import { Link } from "react-router-dom";
import { useUtils } from "../../../hooks/useUtilities";

const UserCourses = () => {
  const { fetchCategoriesWithCourses } = useUtils();
  const { user } = useAuth();

  const { data } = useQuery("userCourses", () =>
    fetchCategoriesWithCourses({ user_id: String(user?.user_id) })
  );

  console.log(data);

  return (
    <div className="flex-1">
      <div className="w-11/12 flex m-auto flex-col gap-6 p-4">
        <h2 className="text-3xl drop-shadow-lg text-center capitalize">
          Meus Cursos
        </h2>

        {data ? (
          <div className="w-full flex flex-col gap-4 bg-neutral-300 shadow rounded p-3">
            {data.map((category) => {
              return (
                <div className="flex flex-col gap-3" key={category.category_id}>
                  <h3 className="text-lg drop-shadow-lg">
                    {category.category_title}
                  </h3>
                  <table className="w-full bg-white rounded-lg">
                    <thead>
                      <tr className="leading-10">
                        <th></th>
                        <th>Curso</th>
                        <th>Progresso</th>
                        <th>Acessar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.category_courses.map((course) => {
                        return (
                          <tr key={course.course_id}>
                            <td>
                              <img
                                className="w-32 h-24 m-auto rounded p-2 "
                                src={course.course_image}
                                alt={course.course_title}
                              />
                            </td>

                            <td>
                              <span>{course.course_title}</span>
                            </td>

                            <td>
                              <div className="w-52 flex-col m-auto ">
                                <div className="flex justify-between">
                                  <span>0%</span> <span>50%</span>{" "}
                                  <span>100%</span>
                                </div>
                                <div
                                  className={`w-full relative bg-neutral-200 h-6 before:rounded-full rounded-full before:absolute before:inset-0 before:h-6 before:w-[${course.course_user.user_course_completed}%] before:bg-green-600`}
                                ></div>
                              </div>
                            </td>

                            <td>
                              <div className="w-full flex justify-center">
                                <a
                                  href={course?.course_iframe_url}
                                  target="_blank"
                                  className="bg-cyan-600 px-3 py-2 rounded text-white font-semibold"
                                >
                                  Acessar
                                </a>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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
