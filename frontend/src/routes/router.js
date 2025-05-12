import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import ResponsiveHeader from "../components/Home/Header/ResponsiveHeader/ResponsiveHeader";
import ResponseTestimonals from "../components/Home/Testimonials/ResponsiveTestimonals/ResponsiveTestimonals";
import WelcomePage from "../pages/WelcomePage";
import AuthForm from "../layouts/AuthForm";
import HeaderLayout from "../layouts/Header";

export default createBrowserRouter([
  {
    path: "/",
    Component: WelcomePage,
  },

  {
    path: "/",
    Component: HeaderLayout,
    children: [
      { path: "home", Component: Home },
      { path: "products", Component: Products },
    ],
  },

  { path: "/welcomePage", Component: WelcomePage },
  { path: "/welcome", Component: WelcomePage },
  {
    path: "/login",
    Component: AuthForm,

    loader() {
      return {
        title: "Login Now",
        buttonText: "Login",
        bottomText: "Not registered yet?",
        bottomLinkText: "Create an account",
        bottomLinkHref: "/register",
      };
    },
  },
  {
    path: "/register",
    Component: AuthForm,
    loader() {
      return {
        title: "Create Account",
        buttonText: "Sing Up",
        bottomText: "Already have an account?",
        bottomLinkText: "Login",
        bottomLinkHref: "/login",
      };
    },
  },

  {
    path: "*",
    Component: NotFound,
  },
]);
