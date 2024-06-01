import React from "react";
import LoginComponent from "../Components/LoginComponent";
import Header from "../Components/Header.js";
import MobileHeader from "../Components/MobileHeader.js";
import Footer from "../Components/Footer.js";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mainlogincontainer">
      <Helmet>
        <title>{t("HeaderLogin")}</title>
      </Helmet>
      <MobileHeader />
      <Header />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
