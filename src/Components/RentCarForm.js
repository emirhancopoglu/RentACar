import React from "react";
import "../Styles/RentCarForm.css";
import { useTranslation } from "react-i18next";
const RentCarForm = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="rentcarcontainer">
      <div className="formcontainer">
        <form className="formdiv">
          <div className="selectcar">
            <label>{t("FormSelectCar")}</label>
            <select>
              <option></option>
              <option value="VW Passat CC">VW Passat CC</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>
          <div className="selectcity">
            <label>{t("FormSalePlace")}</label>
            <select>
              <option></option>
              <option>İstanbul (Anadolu)</option>
              <option>İstanbul (Avrupa)</option>
              <option>İzmir</option>
              <option>Ankara</option>
            </select>
          </div>
          <div className="selectcityback">
            <label>{t("FormBackPlace")}</label>
            <select>
              <option></option>
              <option>İstanbul (Anadolu)</option>
              <option>İstanbul (Avrupa)</option>
              <option>İzmir</option>
              <option>Ankara</option>
            </select>
          </div>
          <div className="selectrentdate">
            <label>{t("FormBuyDate")}</label>
            <input type="date"></input>
          </div>
          <div className="selectrentdateback">
            <label>{t("FormReturnDate")}</label>
            <input type="date"></input>
          </div>
          <button className="sendbutton">
            <div>{t("FormButton")}</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RentCarForm;
