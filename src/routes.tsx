import { createBrowserRouter } from "react-router-dom";
import PageContainer from "./components/layout/PageContainer";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./components/layout/AdminLayout";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/admin/login", element: <AdminLogin /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ path: "dashboard", element: <AdminDashboard /> }],
  },
]);
