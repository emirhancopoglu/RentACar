import React from "react";
import carkey from "../Assets/Information/carkey.png";
import operator from "../Assets/Information/operator.png";
import car from "../Assets/Information/car.png";
import "../Styles/Information.css";
import { useTranslation } from "react-i18next";
const İnformation = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="informationcontainer">
      <h1 className="companyslogan">{t("InformationHead")}</h1>
      <div className="info">
        <div className="infoselectcar">
          <img className="carkeyimg" src={carkey} alt="Arabanı Seç"></img>
          <h4 className="infoselectcarh">{t("InformationFirst")}</h4>
          <p className="infoselectcarp">{t("InformationFirstP")}</p>
        </div>
        <div className="infocontactoperator">
          <img src={operator} alt="Müşteri Hizmetleri"></img>
          <h4 className="infoselectcarh">{t("InformationSecond")}</h4>
          <p className="infoselectcarp">{t("InformationSecondP")}</p>
        </div>
        <div className="carhappines">
          <img src={car} alt="Araç Memnuniyeti"></img>
          <h4 className="infoselectcarh">{t("InformationThird")}</h4>
          <p className="infoselectcarp">{t("InformationThirdP")}</p>
        </div>
      </div>
    </div>
  );
};

export default İnformation;
