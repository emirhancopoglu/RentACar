import React from "react";
import crew1 from "../Assets/Team/crew1.png";
import crew2 from "../Assets/Team/crew2.png";
import crew3 from "../Assets/Team/crew3.png";
import crew4 from "../Assets/Team/crew4.png";
import crew5 from "../Assets/Team/crew5.png";
import crew6 from "../Assets/Team/crew6.png";
import "../Styles/TeamStyle.css";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="teamcontainer">
      <div className="crewcontainer">
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew1} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Hasan DAĞLAR</h5>
            <h6>{t("CrewFirst")}</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew2} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Cemil SEZGİN</h5>
            <h6>{t("CrewSecond")}</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew3} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Ayça ELİF</h5>
            <h6>{t("CrewThird")}</h6>
          </div>
        </div>
      </div>
      <div className="crewcontainer">
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew4} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>İpek MUSLU</h5>
            <h6>{t("CrewFour")}</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew5} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Hakan ÇANAK</h5>
            <h6>{t("CrewFour")}</h6>
          </div>
        </div>
        <div className="crewmember">
          <div className="crewmemberimg">
            <img src={crew6} alt=""></img>
          </div>
          <div className="crewmemberdesc">
            <h5>Çiğdem TÜRK</h5>
            <h6>{t("CrewFive")}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
