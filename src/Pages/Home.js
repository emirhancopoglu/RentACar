import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import RentCarForm from "../Components/RentCarForm";
import Information from "../Components/Information";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="maincontainer">
      <Helmet>
        <title>{t("HeaderHome")}</title>
        <meta name="description" content="anasayfa description" />
      </Helmet>
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
