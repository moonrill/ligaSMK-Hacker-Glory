import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Layout } from "./layout/Layout";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { PageNotFound } from "./pages/404";
import { Category } from "./pages/Dashboard/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/dashboard/category',
        element: <Category/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
]);
