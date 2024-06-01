import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
import ContactHero from "../Components/ContactHero";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("HeaderContact")}</title>
      </Helmet>
      <MobileHeader />
      <Header />
      <ContactHero />
      <Footer />
    </>
  );
};

export default Contact;
