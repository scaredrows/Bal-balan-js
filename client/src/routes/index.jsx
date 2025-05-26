import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
// import Dashboard from "../pages/dashboard/Dashboard";
import PasswordReset from "../pages/auth/PasswordReset";
import Admin from "../pages/admin/admin";
import LandingPage from "../pages/LandingPage";

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  // { path: "/dashboard", element: <Dashboard /> },
  { path: "/reset-password", element: <PasswordReset /> },
  { path: "/admin", element: <Admin/> },
];

export default routes;
