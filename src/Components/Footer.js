import React from "react";
import "../Styles/FooterStyle.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="footercontainer">
      <div className="footercontent">
        <ul className="footerul">
          <li>
            <h4>Car Rental</h4>
          </li>
          <li className="carrentalp">{t("FooterFirstContainerP")}</li>
          <li className="footercontact">
            <a href="tel:123456789">0530 123 45 67</a>
          </li>
          <li className="footercontact">
            <a href="mailto: copogluemirhan@outlook.com">
              copogluemirhan@outlook.com
            </a>
          </li>
        </ul>
        <ul className="footercontent2">
          <li className="footercompanyname">{t("FooterCompany")}</li>

          <li>
            <a href="/"> İstanbul</a>
          </li>
          <li>
            <a href="/about">{t("FooterAboutUs")}</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
        <ul className="footercontent3">
          <li className="footerworkhours">{t("FooterWorkingHour")}</li>
          <li>{t("FooterPazartesi")} - 07:00 - 22:00</li>
          <li>{t("FooterSalı")} - 07:00 - 23:00</li>
          <li>{t("FooterÇarşamba")} - 07:00 - 00:00</li>
          <li>{t("FooterPerşembe")} - 07:00 - 22:00</li>
          <li>{t("FooterCuma")} - 07:00 - 21:00</li>
          <li>{t("FooterCumartesi")} - 07:00 - 01:00</li>
        </ul>
        <ul className="footercontent3">
          <li className="footersubscribe">{t("FooterSubscribe")}</li>
          <li>
            <li className="footersubscribep">{t("FooterSubscribeP")}</li>
          </li>
          <li>
            <input className="footeremail" type="email" />
          </li>
          <li>
            <button className="submit-email">
              {t("FooterSubscribeButton")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
