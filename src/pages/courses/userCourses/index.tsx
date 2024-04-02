import { useQuery } from "react-query";
import { useCourses } from "../../../hooks/useCourses";
import { useAuth } from "../../../store/useAuth";

const UserCourses = () => {
  const { fetchUserCourses } = useCourses();
  const { user } = useAuth();

  const { data } = useQuery("userCourses", () =>
    fetchUserCourses(String(user?.user_id))
  );

  console.log(data);

  return (
    <div className="flex-1">
      <div className="w-11/12 flex m-auto flex-col gap-6 p-4">
        <h2 className="text-3xl drop-shadow-lg text-center capitalize">
          Meus Cursos
        </h2>

        <div className="w-full bg-white shadow rounded p-3">
          {data?.map((course) => {
            return (
              <div>
                <h3>{course.course_title}</h3>
                <p>
                  <span className="text-bold">Horas: </span>{" "}
                  {course.course_description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserCourses;
