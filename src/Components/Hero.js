import React from "react";
import herocar from "../Assets//Hero/herocar.png";
import "../Styles/HeroStyle.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="herocontainer">
      <div className="herotext">
        <h4>{t("HomeHeroP1")}</h4>

        <h1>
          <span>{t("HomeHeroP2Span")}</span> {t("HomeHeroP2")}
        </h1>
        <div className="herobuttons">
          <a href="/">
            <button className="selectbutton">
              {" "}
              {t("HomeHeroSelectCarButton")}
            </button>
          </a>
          <a href="/">
            <button className="detailsbutton">
              {t("HomeHeroDetailsButton")}
            </button>
          </a>
        </div>
      </div>
      <div>
        <img className="herocar" src={herocar} alt="HeroCar"></img>
      </div>
    </div>
  );
};

export default Hero;
