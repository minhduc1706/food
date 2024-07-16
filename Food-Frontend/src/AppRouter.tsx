import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth-callback" element={<AuthCallbackPage />}></Route>
        <Route
          path="/user-profile"
          element={<span>User profile page</span>}
        ></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
