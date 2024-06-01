import React from "react";
import SignupComponent from "../Components/SignupComponent";
import Header from "../Components/Header.js";
import MobileHeader from "../Components/MobileHeader.js";
import Footer from "../Components/Footer.js";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Signup = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="registermaincontainer">
      <Helmet>
        <title>{t("HeaderSignup")}</title>
      </Helmet>
      <MobileHeader />
      <Header />
      <SignupComponent />
      <Footer />
    </div>
  );
};

export default Signup;
