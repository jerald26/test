import { Link } from "react-router-dom";
import About from "./content/About";
import Banner from "./content/Banner";
import Contact from "./content/Contact";
import CustomerReview from "./content/CustomerReview";
import FeaturedProduct from "./content/FeaturedProduct";
import Icons from "./content/Icons";

const Public = () => {
  const content = (
    <div className="bg-gray-100">
      <Banner />

      <About />

      <Icons />

      <FeaturedProduct />

      <CustomerReview />

      <Contact />
      
      <div className="pb-[100px]"></div>
    </div>
  );

  return content;
};

export default Public;
