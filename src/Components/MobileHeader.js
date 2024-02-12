import React from "react";
import { useState } from "react";
import "../Styles/MobileHeaderStyle.css";
import carrental from "../Assets/carrental.png";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="mobileheadercontainer">
      <div className="mobileheader-second">
        <div className="headerlogo">
          <div className="headerlogo-headertoggle">
            <a href="/">
              <img src={carrental} alt="Car Rental Logo"></img>
            </a>
            <label
              for="menu-toggle"
              className="menu-icon"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              ☰
            </label>
          </div>
          <div className="mobileheaderlinks">
            <ul className={menuOpen ? "open" : ""}>
              <li>Anasayfa </li>
              <Link to={"/about"}>
                <li>Hakkımızda </li>
              </Link>
              <Link to={"/carmodels"}>
                <li>Araçlar</li>
              </Link>
              <Link to={"/team"}>
                <li>Ekibimiz</li>
              </Link>
              <Link to={"/contact"}>
                <li>İletişim</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
