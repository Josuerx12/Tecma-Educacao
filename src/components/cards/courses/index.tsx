import { ICourse } from "../../../interfaces/ICourses";
import { FaStar } from "react-icons/fa";

const CoursesCard = ({ course }: { course: ICourse }) => {
  if (course.course_hours < 20) {
    course.course_price = 39.9;
  } else if (course.course_hours > 20 && course.course_hours <= 80) {
    course.course_price = 97.0;
  } else {
    course.course_price = 499;
  }

  return (
    <a
      href={`/cursos/${course.course_category_slug}/${course.course_id}`}
      title="clique para ver detalhes do curso!"
      className="w-72 h-[450px] shadow flex flex-col  gap-1 border  rounded cursor-pointer relative group opacity-85 hover:opacity-100 transition-all ease-in-out duration-300"
    >
      <img
        className="w-svw h-44 rounded-t"
        src={course.course_slideshow[0]}
        alt={course.course_title}
      />
      <div className="flex h-full flex-col justify-between gap-3 p-3">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-wrap">{course.course_title}</h3>

          <p className="line-clamp-3 overflow-hidden text-ellipsis text-justify">
            {course.course_description.replace(//g, " ")}
          </p>
        </div>

        {course.course_price && (
          <p className="font-bold text-2xl text-green-900 ">
            {course.course_price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        )}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm">Avaliação</span>
            <div className="flex gap-1 items-center">
              {Array.from(Array(Math.round(course.course_rating))).map(
                (_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                )
              )}{" "}
              <span>{course.course_rating}</span>
            </div>
          </div>
          {course.course_captions.length > 0 && (
            <div className="flex flex-col">
              <span className="text-sm">Traduções:</span>
              <div className="flex gap-1 flex-wrap">
                {course.course_captions.map((t) => (
                  <img
                    key={t}
                    src={`https://www.iped.com.br/_img/legendas/mini/${t}.png`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export { CoursesCard };
