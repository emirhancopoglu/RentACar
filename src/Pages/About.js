import React from "react";
import WhoWeAre from "../Components/WhoWeAre";
import Header from "../Components/Header";
import İnformation from "../Components/İnformation";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
const About = () => {
  return (
    <div>
      <MobileHeader />
      <Header />
      <WhoWeAre />
      <İnformation />
      <Footer />
    </div>
  );
};

export default About;
