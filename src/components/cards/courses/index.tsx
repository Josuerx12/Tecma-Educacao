import { ICourse } from "../../../interfaces/ICourses";

const CoursesCard = ({ course }: { course: ICourse }) => {
  return (
    <div
      title="clique para ver detalhes do curso!"
      className="w-72 shadow flex flex-col gap-1 border border-red-100 rounded p-2 justify-between cursor-pointer relative group hover:border-red-500 transition-all ease-in-out duration-300"
    >
      <img
        className="w-72 h-44"
        src={course.course_image}
        alt={course.course_title}
      />
      <h3 className="font-bold text-wrap">{course.course_title}</h3>
      <p className="text-gray-600">{course.course_teacher.teacher_name}</p>
      <p>
        {course.course_rating} (
        <span className="text-gray-500">
          {course.course_students} Estudantes
        </span>
        )
      </p>
      <p className="font-bold text-lg">
        {course.course_price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div className="relative text-center left-0 bottom-0 right-0 bg-white py-1 px-2 text-sm text-gray-500">
        Ver Detalhes
      </div>
    </div>
  );
};

export { CoursesCard };
