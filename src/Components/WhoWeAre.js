import React from "react";
import "../Styles/WhoWeAreStyle.css";
import companyface1 from "../Assets/AboutUs/companyface1.jpg";
import withcustomer from "../Assets/AboutUs/withcustomer.jpg";
import contactData from "../Data/ContactData.json";
import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const whowearefirst = contactData.ContactData[0].whowearedata;
  const whowearesecond = contactData.ContactData[0].whowearedatasecond;

  const textSecond =
    contactData.ContactData[0].whowearedatasecond["text-second"];
  const lines = textSecond.split("\n");
  const textSecondWithLi = lines.map((line, index) => (
    <li key={index}>{line}</li>
  ));
  const { t, i18n } = useTranslation();
  return (
    <div className="aboutmaincontainer">
      <div className="aboutcontainer">
        <div className="about">
          <img src={companyface1} alt="Company Face"></img>
          <div className="aboutcontainer-text">
            <h3>{whowearefirst.title}</h3>
            <h5>
              {whowearefirst.text} {<br />}
              {<br />}
              <h5 id="alt-text">{whowearefirst["text-second"]}</h5>
            </h5>
          </div>
        </div>
      </div>
      <div className="aboutcontainer">
        <div className="about">
          <img src={withcustomer} alt="Customer"></img>
          <div className="aboutcontainer-text">
            <h3>{whowearesecond.title}</h3>
            <h5>
              {whowearesecond.text} {<br />}
              {<br />}
              <h5 id="alt-text">
                <ul>{textSecondWithLi}</ul>
              </h5>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
