import React from "react";
import carkey from "../Assets/Information/carkey.png";
import operator from "../Assets/Information/operator.png";
import car from "../Assets/Information/car.png";
import "../Styles/İnformation.css";

const İnformation = () => {
  return (
    <div className="informationcontainer">
      <h1 className="companyslogan">Hızlı & kolay araba kiralama</h1>
      <div className="info">
        <div className="infoselectcar">
          <img className="carkeyimg" src={carkey} alt="Arabanı Seç"></img>
          <h4 className="infoselectcarh">Arabanı seç</h4>
          <p className="infoselectcarp">
            Tüm sürüş ihtiyaçlarınız için geniş araba yelpazesi
          </p>
        </div>
        <div className="infocontactoperator">
          <img src={operator} alt="Müşteri Hizmetleri"></img>
          <h4 className="infoselectcarh">Müşteri Hizmetleri</h4>
          <p className="infoselectcarp">
            Herhangi bir sorunda deneyimli arkadaşlarımızın yardımı hizmetinizde
          </p>
        </div>
        <div className="carhappines">
          <img src={car} alt="Araç Memnuniyeti"></img>
          <h4 className="infoselectcarh">Araç Memnuniyeti</h4>
          <p className="infoselectcarp">
            Araçlarımızın bakımları zamanında yapılmaktadır
          </p>
        </div>
      </div>
    </div>
  );
};

export default İnformation;
