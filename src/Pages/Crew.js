import React from "react";
import Header from "../Components/Header";
import Team from "../Components/Team";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Crew = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("HeaderCrew")}</title>
      </Helmet>
      <MobileHeader />
      <Header />
      <Team />
      <Footer />
    </>
  );
};

export default Crew;
