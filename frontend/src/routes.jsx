import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Layout } from "./layout/Layout";

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
    path: "/login",
    element: <Login />,
  },
]);
