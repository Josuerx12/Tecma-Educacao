import { ICourse } from "./ICourses";

export interface ICategories {
  category_id: number;
  category_title: string;
  category_description: string;
  category_slug: string;
  category_courses_total: number;
  category_image: string;
  category_icon: string;
}

export interface ICategoriesWithCourses {
  category_id: number;
  category_title: string;
  category_description: string;
  category_slug: string;
  category_courses: ICourse[];
}
