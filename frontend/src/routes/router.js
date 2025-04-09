import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";

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
]);
