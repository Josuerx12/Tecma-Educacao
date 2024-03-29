import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home";
import { Register } from "./pages/auth/register";
import { Login } from "./pages/auth/login";
import { useAuth } from "./store/useAuth";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { CoursePage } from "./pages/courses/course";
import { CoursesByCategory } from "./pages/courses/coursesByCategory";

const App = () => {
  const { user, getUser } = useAuth();

  const refreshToken = Cookies.get("refreshToken");

  useEffect(() => {
    if (refreshToken) {
      getUser();
    }
  }, [refreshToken]);

  return (
    <main className="min-h-screen flex flex-col justify-between font-[Poppins] bg-neutral-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cursos/:categorySlug/:courseId"
          element={<CoursePage />}
        />
        <Route path="/cursos/:categorySlug" element={<CoursesByCategory />} />
        <Route
          path="/auth/login"
          element={!user ? <Login /> : <Navigate to="/cursos" />}
        />
        <Route
          path="/auth/cadastre-se"
          element={!user ? <Register /> : <Navigate to="/cursos" />}
        />
      </Routes>
    </main>
  );
};

export { App };
