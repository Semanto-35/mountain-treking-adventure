import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Outlet></Outlet>
      <Testimonials></Testimonials>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;