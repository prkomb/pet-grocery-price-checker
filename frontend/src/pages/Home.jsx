import Header from "@/components/Home/Header/Header";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import TopCategories from "@/components/Home/TopCategories/TopCategories";
import WhyPriceHunt from "@/components/Home/BenefitSection/BenefitSection";
import Testimonals from "@/components/Home/Testimonials/Testimonials";
import Subscribe from "@/components/Home/Subscibe/Subscribe";
import Footer from "@/components/Home/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <TopCategories></TopCategories>
      <WhyPriceHunt></WhyPriceHunt>
      <Testimonals></Testimonals>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
};

export default Home;
