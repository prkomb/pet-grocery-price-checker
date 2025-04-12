import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import ResponsiveHeader from "../components/Header/ResponsiveHeader/ResponsiveHeader";

export default createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/products",
    Component: Products,
  },
  {
    path: "*",
    Component: NotFound,
  },
  { path: "/responsive-header", Component: ResponsiveHeader },
]);
