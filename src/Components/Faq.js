import React, { useState } from "react";
import "../Styles/FaqStyle.css";
import accordionData from "../Data/Accordion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faqcontainer">
      <div className="faqtext">
        <h3>SSS</h3>
        <h2>Sıkça Sorulan Sorular</h2>

        <p className="faqtext-p">
          Araç Kiralama Rezervasyon Süreci Hakkında Sıkça Sorulan Sorular
        </p>
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
