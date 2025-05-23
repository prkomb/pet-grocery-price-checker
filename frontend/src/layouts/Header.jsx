import Header from "@/components/Home/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer/Footer";

const HeaderLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default HeaderLayout;
