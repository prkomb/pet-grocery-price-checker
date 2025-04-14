import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import ResponsiveHeader from "../components/Header/ResponsiveHeader/ResponsiveHeader";
import ResponseTestimonals from "../components/Testimonials/ResponsiveTestimonals/ResponsiveTestimonals";

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
  // some extra links will delete later
  { path: "/responsive-header", Component: ResponsiveHeader },
  { path: "/responsive-testimonals", Component: ResponseTestimonals },
]);
