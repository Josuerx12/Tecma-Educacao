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
import UserCourses from "./pages/user/courses";
import CertifiesPage from "./pages/user/certificates";
import PrivatePolicy from "./pages/privatePolicy";
import UseTerms from "./pages/useTerms";
import { ContactButton } from "./components/contactButton";
import ContactPage from "./pages/contact";
import CertDetailsPage from "./pages/certDetails";
import ErrorPage from "./pages/error";
import UserProfile from "./pages/user/profile";
import { useQuery } from "react-query";
import { useSecure } from "./hooks/useSecure";

const App = () => {
  const { user, getUser } = useAuth();

  const refreshToken = Cookies.get("refreshToken");

  useEffect(() => {
    if (refreshToken) {
      getUser();
    }
  }, [refreshToken]);

  const { fetchSecurity } = useSecure();

  const { data } = useQuery("security", fetchSecurity);

  if (!data) {
    return;
  }

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
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/certificado/:certNumber" element={<CertDetailsPage />} />
        <Route
          path="/usuario/cursos"
          element={user ? <UserCourses /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/usuario/certificados"
          element={user ? <CertifiesPage /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/usuario/perfil"
          element={user ? <UserProfile /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/cursosPorPesquisa/:pesquisa"
          element={<CoursesBySearch />}
        />
        <Route path="/cursos/:categorySlug" element={<CoursesByCategory />} />
        <Route
          path="/auth/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        <Route path="/privacidade" element={<PrivatePolicy />} />
        <Route path="/termos-de-uso" element={<UseTerms />} />

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
        <Route path="*" element={<ErrorPage />} />
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
      <ContactButton />
      <Footer />
    </main>
  );
};

export { App };
