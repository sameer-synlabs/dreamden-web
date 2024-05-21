import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import { useEffect } from "react";
import { getToken } from "@/utils";
import AuthPage from "@/pages/AuthPage";
import Dashboard from "@/pages/Dashboard";
import Header from "@/components/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />

      <main className="py-7 min-h-screen-without-header">
        <div className="container">{children}</div>
      </main>
    </>
  );
};

const RoutesConfig = () => {
  const localToken = getToken();
  const location = useLocation();
  const navigate = useNavigate();

  const checkToken = async () => {
    // try {
    //   const res = await TOKEN_CHECK.validateToken(localToken);
    //   if (!res?.data?.valid) {
    //     localStorage.clear();
    //     setToken(null);
    //     message.error(
    //       res?.data?.message || "Session ended! Please login again."
    //     );
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (localToken) {
      checkToken();
    }
  }, [location, navigate]);

  if (!localToken) {
    return (
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
    </Routes>
  );
};

export default RoutesConfig;
