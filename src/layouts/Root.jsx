import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DynamicTitle from "../components/DynamicTitle";


const Root = () => {
  return (
    <div>
      <DynamicTitle></DynamicTitle>
      <Navbar></Navbar>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;