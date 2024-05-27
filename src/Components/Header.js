import React from "react";
import { useState, useEffect } from "react";
import carrental from "../Assets/HeaderLogo/carrental.png";
import "../Styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import turkishflag from "../Assets/HeaderFlags/turkishflag.jpg";
import enflag from "../Assets/HeaderFlags/enflag.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguagee = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    console.log(i18n.language);
  };

  return (
    <div className="header">
      <div className="headerlogo">
        <a href="/">
          <img src={carrental} alt="Car Rental Logo"></img>
        </a>
      </div>
      <div className="headerlinksbuttonscontainer">
        <ul className="headerlinks">
          <a href="/">
            <li>{t("HeaderHome")}</li>
          </a>
          <Link to="/about">
            <li>{t("HeaderAboutUs")}</li>
          </Link>

          <Link to="/carmodels">
            <li>{t("HeaderCarModels")}</li>
          </Link>

          <Link to="/team">
            <li>{t("HeaderCrew")}</li>
          </Link>

          <Link to="/contact">
            <li>{t("HeaderContact")}</li>
          </Link>
        </ul>
        <div className="headerbutton">
          <Link to="/signup">
            <button className="headersignup">{t("HeaderSignup")}</button>
          </Link>

          <Link to="/login">
            <button className="headerlogin"> {t("HeaderLogin")}</button>
          </Link>

          {i18n.language === "en" ? (
            <img
              src={turkishflag}
              alt="TurkishFlag"
              className="turkishflag"
              onClick={() => changeLanguagee("tr")}
            ></img>
          ) : (
            <img
              src={enflag}
              alt="enFlag"
              className="enflag"
              onClick={() => changeLanguagee("en")}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
