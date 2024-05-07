import React, { useState } from "react";
import "../Styles/FaqStyle.css";
import accordionData from "../Data/Accordion";
import { useTranslation } from "react-i18next";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="faqcontainer">
      <div className="faqtext">
        <h3>{t("FAQSSS")}</h3>
        <h2>{t("FAQSSS2")}</h2>

        <p className="faqtext-p">{t("FAQSSS3")}</p>
      </div>

      <div className="accordion">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => handleAccordionClick(index)}
            >
              <div>{item.title}</div>
              <div>{openIndex === index ? "-" : "+"}</div>
            </div>
            {openIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
