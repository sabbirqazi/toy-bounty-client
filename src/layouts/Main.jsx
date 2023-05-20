import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
