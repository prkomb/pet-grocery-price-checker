import "./App.css";
// import Header from "./components/Header/Header.jsx";
// import HeroSection from "./components/HeroSection/HeroSection.jsx";
// import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
// import TopCategories from "./components/TopCategories/TopCategories.jsx";
// import WhyPriceHunt from "./components/BenefitSection/BenefitSection.jsx";
// import Testimonals from "./components/Testimonials/Testimonials.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const auth = getAuth();

const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      }
    });
  });
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
