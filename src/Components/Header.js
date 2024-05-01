import React from "react";
import carrental from "../Assets/HeaderLogo/carrental.png";
import "../Styles/HeaderStyle.css";
import { Link } from "react-router-dom";

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
        <Link to="/about">
          <li>Hakkımızda</li>
        </Link>

        <Link to="/carmodels">
          <li>Araç Modelleri</li>
        </Link>

        <Link to="/team">
          <li>Ekibimiz</li>
        </Link>

        <Link to="/contact">
          <li>İletişim</li>
        </Link>
      </ul>
      <div className="headerbutton">
        <Link to="/signup">
          <button className="headersignup">Kaydol</button>
        </Link>

        <Link to="/login">
          <button className="headerlogin">Giriş</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
