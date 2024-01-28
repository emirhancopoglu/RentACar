import React from "react";
import carkey from "../Assets/carkey.png";
import operator from "../Assets/operator.png";
import car from "../Assets/car.png";
import İnformationcss from "../Styles/İnformation.css";

const İnformation = () => {
  return (
    <div className="informationcontainer">
      <h1 className="companyslogan">Hızlı & kolay araba kiralama</h1>
      <div className="info">
        <div className="infoselectcar">
          <img className="carkeyimg" src={carkey} alt="Arabanı Seç"></img>
          <h4>Arabanı seç</h4>
          <p>Tüm sürüş ihtiyaçlarınız için geniş araba yelpazesi</p>
        </div>
        <div className="infocontactoperator">
          <img src={operator} alt="Müşteri Hizmetleri"></img>
          <h4>Müşteri Hizmetleri</h4>
          <p>
            Herhangi bir sorunda deneyimli arkadaşlarımızın yardımı hizmetinizde
          </p>
        </div>
        <div className="carhappines">
          <img src={car} alt="Araç Memnuniyeti"></img>
          <h4>Araç Memnuniyeti</h4>
          <p>Araçlarımızın bakımları zamanında yapılmaktadır</p>
        </div>
      </div>
    </div>
  );
};

export default İnformation;
