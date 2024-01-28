import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import RentCarForm from "./Components/RentCarForm";
import İnformation from "./Components/İnformation";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="maincontainer">
      <Header />
      <Hero />
      <RentCarForm />
      <İnformation />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
