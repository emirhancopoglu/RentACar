import React from "react";
import "../Styles/ContactStyle.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const ContactHero = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="container"
    >
      <div className="contact-div">
        <div className="contactinformation">
          <h5 id="detailsh5">{t("ContactH")}</h5>
          <p>{t("ContactP")}</p>
          <a href="/">0535 555 55 55</a>
          <a href="/">carrental@gmail.com</a>
          <a href="/"> İstanbul </a>
        </div>
        <div className="contactformcontainer">
          <form>
            <label>{t("ContactPlaceholderFirst")} </label>
            <input type="text" required></input>
            <label>Email</label>
            <input type="text" required></input>
            <label>{t("ContactPlaceholderSecond")}</label>
            <textarea id="textarea"></textarea>

            <a href="/">
              <button>{t("ContactButton")}</button>
            </a>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactHero;
