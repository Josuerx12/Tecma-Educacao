export interface ICourses {
  TOTAL_PAGES: number;
  CURRENT_PAGE: number;
  COURSES: ICourse[];
}

export interface ICourse {
  course_id: number;
  course_company_id: number;
  course_title: string;
  course_description: string;
  course_slug: string;
  course_free: number;
  course_format: number;
  course_category_id: number;
  course_category_slug: string;
  course_category_title: string;
  course_rating: number;
  course_students: number;
  course_captions: string[];
  course_hours: number;
  course_video: string;
  course_image: string;
  course_slideshow: string[];
  course_teacher: CourseTeacher;
  course_price: number;
  course_user: CourseUser;
  course_chapters: ICourseChapter[];
}

export interface ICourseChapter {
  chapter_title: string;
  chapter_topics: string[];
}

interface CourseTeacher {
  teacher_name: string;
  teacher_description: string;
  teacher_image: string;
}

interface CourseUser {
  user_id: number;
  user_course_completed: number;
  user_course_grade: number;
  user_course_format: number;
}
