import React from "react";
import carrental from "../Assets/carrental.png";
import HeaderStyle from "../Styles/HeaderStyle.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerlogo">
        <a href="/">
          <img src={carrental} alt="Car Rental Logo"></img>
        </a>
      </div>
      <ul className="headerlinks">
        <a href="/">
          <li>Anasayfa</li>
        </a>
        <a href="/">
          <li>Hakkımızda</li>
        </a>
        <a href="/">
          <li>Araç Modelleri</li>
        </a>
        <a href="/">
          <li>Takımımız</li>
        </a>
        <a href="/">
          <li>İletişim</li>
        </a>
      </ul>
      <div className="headerbutton">
        <a href="">
          <button className="headersignup">Kaydol</button>
        </a>
        <a href="">
          <button className="headerlogin">Giriş</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
