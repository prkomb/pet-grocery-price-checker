import Header from "@/components/Home/Header/Header.jsx";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default HeaderLayout;
