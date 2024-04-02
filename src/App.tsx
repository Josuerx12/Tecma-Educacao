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
import Footer from "./components/footer";
import { CoursesBySearch } from "./pages/courses/courseBySearch";
import Recovery from "./pages/auth/recovery";
import ClaimCoupon from "./pages/claimCoupon";
import CartPage from "./pages/cart";
import { Bounce, ToastContainer } from "react-toastify";
import UserCourses from "./pages/courses/userCourses";

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
        <Route path="/carrinho" element={<CartPage />} />
        <Route
          path="/cursos"
          element={user ? <UserCourses /> : <Navigate to="/cursos" />}
        />
        <Route
          path="/cursosPorPesquisa/:pesquisa"
          element={<CoursesBySearch />}
        />
        <Route path="/cursos/:categorySlug" element={<CoursesByCategory />} />
        <Route
          path="/auth/login"
          element={!user ? <Login /> : <Navigate to="/cursos" />}
        />

        <Route
          path="/auth/recovery"
          element={!user ? <Recovery /> : <Navigate to="/cursos" />}
        />
        <Route
          path="/resgatar/cupom"
          element={user ? <ClaimCoupon /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/auth/cadastre-se"
          element={!user ? <Register /> : <Navigate to="/cursos" />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Footer />
    </main>
  );
};

export { App };
