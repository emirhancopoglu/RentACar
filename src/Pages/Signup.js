import React from "react";
import SignupComponent from "../Components/SignupComponent";
import Header from "../Components/Header.js";
import MobileHeader from "../Components/MobileHeader.js";
import Footer from "../Components/Footer.js";

const Signup = () => {
  return (
    <div className="registermaincontainer">
      <MobileHeader />
      <Header />
      <SignupComponent />
      <Footer />
    </div>
  );
};

export default Signup;
