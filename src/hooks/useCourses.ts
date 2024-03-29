/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../config/api";
import { ICourses } from "../interfaces/ICourses";

function useCourses() {
  const token = "10ddc14a0c24267b41c1fa2a81727b514ec9f857";

  async function fetchMostRated(): Promise<ICourses> {
    try {
      const formData = new FormData();

      formData.append("token", token);
      formData.append("order", "relevance");

      const payload = (await api.post("/api/course/get-courses", formData))
        .data;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  async function fetchRelatedCourses({
    categoryId,
    courseId,
  }: {
    categoryId: string;
    courseId: string;
  }): Promise<ICourses> {
    try {
      const formData = new FormData();

      formData.append("token", token);
      formData.append("category_id", categoryId);
      formData.append("course_id", courseId);

      const payload = (await api.post("/api/course/get-related", formData))
        .data;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  async function fetchByFilters(filters: FormData): Promise<ICourses> {
    try {
      filters.append("token", token);

      const payload = (await api.post("/api/course/get-courses", filters)).data;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  async function fetchOneCourse(courseId: string): Promise<ICourses> {
    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("course_id", courseId);
      formData.append("include_topics", "1");

      const payload = (await api.post("/api/course/get-courses", formData))
        .data;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  return {
    fetchMostRated,
    fetchByFilters,
    fetchOneCourse,
    fetchRelatedCourses,
  };
}

export { useCourses };
