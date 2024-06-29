import React from "react";
import herocar from "../Assets//Hero/herocar.png";
import "../Styles/HeroStyle.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="herocontainer"
    >
      <div className="herotextbuttonscontainer">
        <div className="herotext">
          <h4>{t("HomeHeroP1")}</h4>

          <h1>
            <span>{t("HomeHeroP2Span")}</span> {t("HomeHeroP2")}
          </h1>
        </div>
        <div className="herobuttons">
          <a href="/">
            <button className="selectbutton">
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
    </motion.div>
  );
};

export default Hero;
