export interface IUser {
  PROFILE: Profile;
}

interface Profile {
  user_id: number;
  user_type: number;
  user_name: string;
  user_first_name: string;
  user_email: string;
  user_image: string;
  user_image_small: string;
  user_cpf: string;
  user_address: UserAddress;
  user_ranking: UserRanking;
  user_dashboard: UserDashboard;
}

interface UserAddress {
  address_street: string;
  address_neighborhood: string;
  address_postalcode: string;
  address_city: string;
  address_state: AddressState;
}

interface AddressState {
  state_id: number;
  state_uf: string;
  state_name: string;
}

interface UserRanking {
  user_points: UserPoints;
  user_level: UserLevel;
}

interface UserPoints {
  total: number;
  month: number;
}

interface UserLevel {
  level_name: string;
  level_image: string;
}

interface UserDashboard {
  dashboard_grade: number;
  dashboard_score: number;
  dashboard_colaborations: number;
  dashboard_reflections: number;
  dashboard_orientations: number;
  dashboard_rating_total: number;
  dashboard_rating_average: number;
  dashboard_courses_inprogress: number;
  dashboard_courses_completed: number;
  dashboard_courses_total: number;
  dashboard_badges: DashboardBadge[];
  dashboard_profile: DashboardProfile;
}

interface DashboardBadge {
  badge_id: number;
  badge_quantity: number;
  badge_date: string;
  badge_title: string;
  badge_image: string;
}

interface DashboardProfile {
  main_area: MainArea;
  secondary_area: SecondaryArea;
  completed_courses_by_area: CompletedCoursesByArea[];
  last_course_completed: LastCourseCompleted;
  average_time_to_complete_course: AverageTimeToCompleteCourse;
  average_time_to_start_new_course: AverageTimeToStartNewCourse;
  last_trail_completed: LastTrailCompleted;
}

interface MainArea {
  area_id: number;
  area_name: string;
  total_started_courses: number;
}

interface SecondaryArea {
  area_id: number;
  area_name: string;
  total_started_courses: number;
}

interface CompletedCoursesByArea {
  area_id: number;
  area_name: string;
  total_completed_courses: number;
}

interface LastCourseCompleted {
  course_id: number;
  course_title: string;
  course_completed_date: string;
  course_completed_time: CourseCompletedTime;
}

interface CourseCompletedTime {
  time_in_seconds: number;
}

interface AverageTimeToCompleteCourse {
  time_in_seconds: number;
}

interface AverageTimeToStartNewCourse {
  time_in_seconds: number;
}

interface LastTrailCompleted {
  trail_id: number;
  trail_title: string;
}
