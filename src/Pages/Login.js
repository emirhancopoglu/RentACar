import React from "react";
import LoginComponent from "../Components/LoginComponent";
import Header from "../Components/Header.js";
import MobileHeader from "../Components/MobileHeader.js";
import Footer from "../Components/Footer.js";

const Login = () => {
  return (
    <div className="mainlogincontainer">
      <MobileHeader />
      <Header />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
