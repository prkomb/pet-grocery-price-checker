import "./App.css";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import TopCategories from "./components/TopCategories/TopCategories.jsx";

const App = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <TopCategories></TopCategories>
    </>
  );
};

export default App;
