import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProductPage from "../pages/products";
import NotFoundPage from "../pages/404";
import HomePage from "../pages/home";
import BlogPage from "../pages/blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },
]);

export default router;
