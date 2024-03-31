import React from "react";
import "../Styles/SignupStyle.css";

const SignupComponent = () => {
  return (
    <div className="signupmaincontainer">
      <div className="giris">
        <div className="form">
          <form className="kayit" id="signup-form">
            <input type="text" placeholder="TC Kimlik No" id="username" />
            <input type="text" placeholder="Ad" />
            <input type="text" placeholder="Soyad" />
            <input type="date" placeholder="Doğum tarihi" />
            <input type="text" placeholder="0 5** *** ** **" />
            <input type="password" placeholder="Şifre" id="password" />
            <a href="/">
              <button id="signup-button">Kaydol</button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
