import React from "react";
import herocar from "../Assets//Hero/herocar.png";
import "../Styles/HeroStyle.css";

const Hero = () => {
  return (
    <div className="herocontainer">
      <div className="herotext">
        <h4>Gezini Şimdi Planla</h4>

        <h1>
          <span>Uygun</span> fiyatlarla istediğin aracı kirala!
        </h1>
        <div className="herobuttons">
          <a href="/">
            <button className="selectbutton">Aracını Seç</button>
          </a>
          <a href="/">
            <button className="detailsbutton">Detaylar</button>
          </a>
        </div>
      </div>
      <div>
        <img className="herocar" src={herocar} alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
