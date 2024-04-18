import { ICourse } from "../../../interfaces/ICourses";

const UserCourseCard = ({ course }: { course: ICourse }) => {
  return (
    <a
      href={course.course_iframe_url}
      target="_blank"
      title={`TECMA - Acessar curso ${course.course_title}`}
      key={course.course_id}
      className="w-full sm:w-60 h-72 flex flex-col  bg-neutral-200 opacity-90 hover:opacity-100"
    >
      <img src={course.course_image} alt={course.course_title} />

      <div className=" flex flex-col justify-between h-full p-2">
        <h2 className="font-bold line-clamp-2">{course.course_title}</h2>
        {course.course_teacher.teacher_name && (
          <p className="text-sm text-neutral-600 line-clamp-1">
            Professor: {course.course_teacher.teacher_name}
          </p>
        )}
        <div className="w-full">
          <div className="w-full relative h-1 bg-neutral-400">
            <div
              className="absolute top-0 left-0 h-full bg-red-500"
              style={{ width: `${course.course_user.user_course_completed}%` }}
            ></div>
          </div>
          <span className="text-sm">
            {course.course_user.user_course_completed}% Concluído
          </span>
        </div>
      </div>
    </a>
  );
};

export default UserCourseCard;
