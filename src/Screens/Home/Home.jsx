import React from "react";

import CategorySection from "../../Components/CategorySection/CategorySection";
import Testimonials from "../../Sections/Testimonials/Testimonials";
import Faq from "../../Sections/Faq/Faq";

const Home = () => {
  return (
    <div>
      <CategorySection />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
