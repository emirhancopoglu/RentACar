import React from "react";
import { useState } from "react";
import "../Styles/MobileHeaderStyle.css";
import carrental from "../Assets/HeaderLogo/carrental.png";

const HamburgerHeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburgermenuclass">
      <header className="App-header">
        <div className="left-content">
          <img src={carrental} alt="MobileHeader"></img>
        </div>
        <div className="right-content">
          <div className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <div className="close-button" onClick={closeMenu}>
            &times;
          </div>
          <ul>
            <li>
              <a href="/" onClick={closeMenu}>
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="/about" onClick={closeMenu}>
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="/carmodels" onClick={closeMenu}>
                Araç Modelleri
              </a>
            </li>
            <li>
              <a href="/team" onClick={closeMenu}>
                Ekibimiz
              </a>
            </li>
            <li>
              <a href="/contact" onClick={closeMenu}>
                İletişim
              </a>
            </li>
            <li>
              <a href="/signup" onClick={closeMenu}>
                Kaydol
              </a>
            </li>
            <li>
              <a href="/login" onClick={closeMenu}>
                Giriş
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HamburgerHeaderComponent;
