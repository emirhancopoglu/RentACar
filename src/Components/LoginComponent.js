import React from "react";
import "../Styles/LoginStyles.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const LoginComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="loginmaincontainer"
    >
      <div className="logincontainer">
        <div className="giris">
          <div className="form">
            <form className="kayit" id="signup-form">
              <input
                type="text"
                placeholder={t("LoginTcKimlik")}
                id="username"
              />
              <input
                type="password"
                placeholder={t("LoginŞifre")}
                id="password"
              />
              <a href="/">
                <button id="signup-button">{t("LoginButton")}</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginComponent;
