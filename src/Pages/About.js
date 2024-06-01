import React from "react";
import WhoWeAre from "../Components/WhoWeAre";
import Header from "../Components/Header";
import Information from "../Components/Information";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("HeaderAboutUs")}</title>
      </Helmet>
      <MobileHeader />
      <Header />
      <WhoWeAre />
      <Information />
      <Footer />
    </>
  );
};

export default About;
