import React from "react";
import RentCarFormCss from "../Styles/RentCarForm.css";

const RentCarForm = () => {
  return (
    <div className="rentcarcontainer">
      <div className="formcontainer">
        <form className="formdiv">
          <div className="selectcar">
            <label>Aracınızı seçiniz</label>
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
            <label>Alış yeri</label>
            <select>
              <option></option>
              <option>İstanbul (Anadolu)</option>
              <option>İstanbul (Avrupa)</option>
              <option>İzmir</option>
              <option>Ankara</option>
            </select>
          </div>
          <div className="selectcityback">
            <label>Dönüş yeri</label>
            <select>
              <option></option>
              <option>İstanbul (Anadolu)</option>
              <option>İstanbul (Avrupa)</option>
              <option>İzmir</option>
              <option>Ankara</option>
            </select>
          </div>
          <div className="selectrentdate">
            <label>Alış tarihi</label>
            <input type="date"></input>
          </div>
          <div className="selectrentdateback">
            <label>Dönüş tarihi</label>
            <input type="date"></input>
          </div>
          <button className="sendbutton">Bul</button>
        </form>
      </div>
    </div>
  );
};

export default RentCarForm;
