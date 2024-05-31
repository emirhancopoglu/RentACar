import React from "react";
import "../Styles/WhoWeAreStyle.css";
import companyface1 from "../Assets/AboutUs/companyface1.jpg";
import withcustomer from "../Assets/AboutUs/withcustomer.jpg";
import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="aboutmaincontainer">
      <div className="aboutcontainer">
        <div className="about">
          <img src={companyface1} alt="Company Face"></img>
          <div className="aboutcontainer-text">
            <h3>{t("AboutFirstH")}</h3>
            <h5>
              {t("AboutFirstP")} {<br />}
              {<br />}
              <h5 id="alt-text">{t("AboutFirstPContinue")}</h5>
            </h5>
          </div>
        </div>
      </div>
      <div className="aboutcontainer">
        <div className="about">
          <img src={withcustomer} alt="Customer"></img>
          <div className="aboutcontainer-text">
            <h3>{t("AboutSecondH")}</h3>
            <h5>
              {t("AboutSecondP")} {<br />}
              {<br />}
              <h5 id="alt-text">
                <ul>
                  <li>{t("AboutSecondL1")}</li>
                  <li>{t("AboutSecondL2")}</li>
                  <li>{t("AboutSecondL3")}</li>
                  <li>{t("AboutSceondL4")}</li>
                </ul>
              </h5>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
