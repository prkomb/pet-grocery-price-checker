import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import TopCategories from "../components/TopCategories/TopCategories";
import WhyPriceHunt from "../components/BenefitSection/BenefitSection";
import Testimonals from "../components/Testimonials/Testimonials";
import Subscribe from "../components/Subscibe/Subscribe";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <TopCategories></TopCategories>
      <WhyPriceHunt></WhyPriceHunt>
      <Testimonals></Testimonals>
      <Subscribe></Subscribe>
    </>
  );
};

export default Home;
