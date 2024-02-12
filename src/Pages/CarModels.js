import React from "react";
import Header from "../Components/Header";
import ListOfCars from "../Components/ListOfCars";
import Footer from "../Components/Footer";
import MobileHeader from "../Components/MobileHeader";
const CarModels = () => {
  return (
    <div>
      <MobileHeader />
      <Header />
      <ListOfCars />
      <Footer />
    </div>
  );
};

export default CarModels;
