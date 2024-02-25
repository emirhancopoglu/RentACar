import React from "react";
import "../Styles/LoginStyles.css";

const Login = () => {
  return (
    <div className="loginmaincontainer">
      <div className="logincontainer">
        <div className="giris">
          <div className="form">
            <form className="kayit" id="signup-form">
              <input type="text" placeholder="TC Kimlik No" id="username" />
              <input type="password" placeholder="Şifre" id="password" />
              <a href="/">
                <button id="signup-button">GİRİŞ</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
