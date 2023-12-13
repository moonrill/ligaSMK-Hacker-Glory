import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Layout } from "./layout/Layout";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index/>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <Dashboard/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);
