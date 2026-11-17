import Header from "@/components/Home/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer/Footer";

const HeaderLayout = () => {
  return (
    <>
      <Header></Header>
      <main id="main" tabIndex={-1} className="min-h-[60vh] focus:outline-none">
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default HeaderLayout;
