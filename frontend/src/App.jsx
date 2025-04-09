import "./App.css";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import TopCategories from "./components/TopCategories/TopCategories.jsx";
import WhyPriceHunt from "./components/BenefitSection/BenefitSection.jsx";
import Testimonals from "./components/Testimonials/Testimonials.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
