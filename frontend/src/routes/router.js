import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import ResponsiveHeader from "../components/Home/Header/ResponsiveHeader/ResponsiveHeader";
import ResponseTestimonals from "../components/Home/Testimonials/ResponsiveTestimonals/ResponsiveTestimonals";
import WelcomePage from "../pages/WelcomePage";

export default createBrowserRouter([
  {
    path: "/",
    Component: WelcomePage,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/products",
    Component: Products,
  },
  { path: "/welcomePage", Component: WelcomePage },
  { path: "/welcome", Component: WelcomePage },
  {
    path: "*",
    Component: NotFound,
  },
  // some extra links will delete later
  { path: "/responsive-header", Component: ResponsiveHeader },
  { path: "/responsive-testimonals", Component: ResponseTestimonals },
]);
