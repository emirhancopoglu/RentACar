import React from "react";
import { useState } from "react";
import "../Styles/MobileHeaderStyle.css";
import carrental from "../Assets/HeaderLogo/carrental.png";
import { useTranslation } from "react-i18next";
import turkishflag from "../Assets/HeaderFlags/turkishflag.jpg";
import enflag from "../Assets/HeaderFlags/enflag.png";

const HamburgerHeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeLanguagee = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    console.log(i18n.language);
  };

  const { t, i18n } = useTranslation();
  return (
    <div className="hamburgermenuclass">
      <header className="App-header">
        <div className="left-content">
          <img src={carrental} alt="MobileHeader"></img>
        </div>
        <div className="right-content">
          <div className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <div className="close-button" onClick={closeMenu}>
            &times;
          </div>
          <ul>
            <li>
              <a href="/" onClick={closeMenu}>
                {t("HeaderHome")}
              </a>
            </li>
            <li>
              <a href="/about" onClick={closeMenu}>
                {t("HeaderAboutUs")}
              </a>
            </li>
            <li>
              <a href="/carmodels" onClick={closeMenu}>
                {t("HeaderCarModels")}
              </a>
            </li>
            <li>
              <a href="/team" onClick={closeMenu}>
                {t("HeaderCrew")}
              </a>
            </li>
            <li>
              <a href="/contact" onClick={closeMenu}>
                {t("HeaderContact")}
              </a>
            </li>
            <li>
              <a href="/signup" onClick={closeMenu}>
                {t("HeaderSignup")}
              </a>
            </li>
            <li>
              <a href="/login" onClick={closeMenu}>
                {t("HeaderLogin")}
              </a>
            </li>
            <li>
              <div className="flagdivmobile">
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
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HamburgerHeaderComponent;
