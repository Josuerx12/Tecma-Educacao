import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const CoursesByCategory = () => {
  const { categorySlug } = useParams();

  const { data, isLoading } = useQuery("coursesByCategory");

  return (
    <div className="flex-1">
      <h3>{categorySlug}</h3>
    </div>
  );
};

export { CoursesByCategory };
