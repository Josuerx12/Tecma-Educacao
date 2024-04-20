/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../config/api";
import { ICourse, ICourses } from "../interfaces/ICourses";

function useCourses() {
  const token = "";

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

  async function fetchUserCourses(userId?: string): Promise<ICourse[]> {
    try {
      const formData = new FormData();

      formData.append("token", token);
      {
        userId && formData.append("user_id", userId);
      }

      const payload = (await api.post("/api/course/get-courses", formData)).data
        .COURSES;

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
  }): Promise<ICourse[]> {
    try {
      const formData = new FormData();

      formData.append("token", token);
      formData.append("category_id", categoryId);
      formData.append("course_id", courseId);

      const payload = (await api.post("/api/course/get-related", formData)).data
        .COURSES;

      return payload;
    } catch (error: any) {
      throw error.response.data.ERROR;
    }
  }

  async function fetchByCategoryCourses(
    categorySlug: string
  ): Promise<ICourse[]> {
    try {
      const formData = new FormData();

      formData.append("token", token);
      formData.append("category_slug", categorySlug);
      formData.append("results", "500");

      const payload = await api.post("/api/course/get-courses", formData);

      return payload.data.COURSES;
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
  async function fetchBySearch(search?: string): Promise<ICourse[]> {
    try {
      const formData = new FormData();
      formData.append("token", token);

      if (search && search.length > 0) formData.append("query", search);

      const payload = (await api.post("/api/course/get-courses", formData)).data
        .COURSES;

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
    fetchByCategoryCourses,
    fetchBySearch,
    fetchUserCourses,
  };
}

export { useCourses };
