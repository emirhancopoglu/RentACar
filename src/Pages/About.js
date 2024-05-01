import React from "react";
import WhoWeAre from "../Components/WhoWeAre";
import Header from "../Components/Header";
import Information from "../Components/Information";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
const About = () => {
  return (
    <div>
      <MobileHeader />
      <Header />
      <WhoWeAre />
      <Information />
      <Footer />
    </div>
  );
};

export default About;
