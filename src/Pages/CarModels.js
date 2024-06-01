import React from "react";
import Header from "../Components/Header";
import ListOfCars from "../Components/ListOfCars";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const CarModels = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("HeaderCarModels")}</title>
      </Helmet>
      <MobileHeader />
      <Header />
      <ListOfCars />
      <Footer />
    </>
  );
};

export default CarModels;
