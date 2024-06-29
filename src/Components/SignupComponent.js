import React from "react";
import "../Styles/SignupStyle.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const SignupComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="signupmaincontainer"
    >
      <div className="giris">
        <div className="form">
          <form className="kayit" id="signup-form">
            <input
              type="text"
              placeholder={t("SignUpTcKimlik")}
              id="username"
            />
            <input type="text" placeholder={t("SignUpAd")} />
            <input type="text" placeholder={t("SignUpSoyad")} />
            <input type="date" placeholder="Doğum tarihi" />
            <input type="text" placeholder="0 5** *** ** **" />
            <input
              type="password"
              placeholder={t("SignUpŞifre")}
              id="password"
            />
            <a href="/">
              <button id="signup-button">{t("SignUpButton")}</button>
            </a>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SignupComponent;
