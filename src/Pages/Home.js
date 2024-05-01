import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import RentCarForm from "../Components/RentCarForm";
import Information from "../Components/Information";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";

const Home = () => {
  return (
    <div className="maincontainer">
      <MobileHeader />
      <Header />
      <Hero />
      <RentCarForm />
      <Information />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
