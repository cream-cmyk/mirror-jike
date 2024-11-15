import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "../pages/Layyout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/login',
    element: <Login />
  }
])
export default router