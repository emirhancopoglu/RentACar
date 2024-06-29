import React from "react";
import audi from "../Assets/ListOfCars/audi.jpg";
import bmw from "../Assets/ListOfCars/bmw.jpg";
import clio from "../Assets/ListOfCars/clio.jpg";
import megan from "../Assets/ListOfCars/megan.jpg";
import passat from "../Assets/ListOfCars/passat.jpg";
import golf from "../Assets/ListOfCars/wwgolf.jpg";
import "../Styles/ListOfCarsStyle.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ListOfCars = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="maincarcontainer"
    >
      <div className="carcontainer">
        <div className="car-div">
          <div className="car-img">
            <img src={audi} alt="Audi"></img>
            <div className="car-desc-container">
              <div className="car-desc">
                <div className="car-name-price">
                  <div className="car-name">
                    <h6>Audi A1 {<br />}★★★★★ </h6>
                  </div>
                  <div className="car-price">
                    <h6>
                      3450₺ {<br />}
                      {t("ListOfCarsDays")}{" "}
                    </h6>
                  </div>
                </div>
                <div className="cardetails">
                  <h6>
                    {t("ListOfCarsManuel")} {<br />} 2017
                  </h6>
                  <h6>{t("ListOfCarsDiesel")}</h6>
                </div>
                <div className="car-go-button">
                  <button className="rentbutton">
                    {t("ListOfCarsButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="car-div">
          <div className="car-img">
            <img src={megan} alt="Megan"></img>
            <div className="car-desc-container">
              <div className="car-desc">
                <div className="car-name-price">
                  <div className="car-name">
                    <h6>Renault Megan {<br />}★★★★★ </h6>
                  </div>
                  <div className="car-price">
                    <h6>
                      3100₺ {<br />}
                      {t("ListOfCarsDays")}{" "}
                    </h6>
                  </div>
                </div>
                <div className="cardetails">
                  <h6>
                    {t("ListOfCarsManuel")} {<br />} 2020
                  </h6>
                  <h6>{t("ListOfCarsGasoline")}</h6>
                </div>
                <div className="car-go-button">
                  <button className="rentbutton">
                    {" "}
                    {t("ListOfCarsButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="car-div">
          <div className="car-img">
            <img src={golf} alt="Audi"></img>
            <div className="car-desc-container">
              <div className="car-desc">
                <div className="car-name-price">
                  <div className="car-name">
                    <h6>Volkswagen Golf {<br />}★★★★ </h6>
                  </div>
                  <div className="car-price">
                    <h6>
                      2450₺ {<br />}
                      {t("ListOfCarsDays")}{" "}
                    </h6>
                  </div>
                </div>
                <div className="cardetails">
                  <h6>
                    {t("ListOfCarsManuel")} {<br />} 2015
                  </h6>
                  <h6>{t("ListOfCarsDiesel")}</h6>
                </div>
                <div className="car-go-button">
                  <button className="rentbutton">
                    {t("ListOfCarsButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carcontainer">
        <div className="car-div">
          <div className="car-img">
            <img src={passat} alt="Audi"></img>
            <div className="car-desc-container">
              <div className="car-desc">
                <div className="car-name-price">
                  <div className="car-name">
                    <h6>Volkswagen Passat CC {<br />}★★★★ </h6>
                  </div>
                  <div className="car-price">
                    <h6>
                      2700₺ {<br />}
                      {t("ListOfCarsDays")}{" "}
                    </h6>
                  </div>
                </div>
                <div className="cardetails">
                  <h6>
                    {t("ListOfCarsOtomatik")} {<br />} 2017
                  </h6>
                  <h6>{t("ListOfCarsGasoline")}</h6>
                </div>
                <div className="car-go-button">
                  <button className="rentbutton">
                    {" "}
                    {t("ListOfCarsButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="car-div">
          <div className="car-img">
            <img src={bmw} alt="Audi"></img>
            <div className="car-desc-container">
              <div className="car-desc">
                <div className="car-name-price">
                  <div className="car-name">
                    <h6>BMW 320 {<br />}★★★★★ </h6>
                  </div>
                  <div className="car-price">
                    <h6>
                      3000₺ {<br />}
                      {t("ListOfCarsDays")}{" "}
                    </h6>
                  </div>
                </div>
                <div className="cardetails">
                  <h6>
                    {t("ListOfCarsManuel")} {<br />} 2015
                  </h6>
                  <h6>{t("ListOfCarsDiesel")}</h6>
                </div>
                <div className="car-go-button">
                  <button className="rentbutton">
                    {" "}
                    {t("ListOfCarsButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="car-div">
          <div className="car-img">
            <img src={clio} alt="Audi"></img>
            <div className="car-desc-container">
              <div className="car-desc">
                <div className="car-name-price">
                  <div className="car-name">
                    <h6>Renault Clio {<br />}★★★★ </h6>
                  </div>
                  <div className="car-price">
                    <h6>
                      2100₺ {<br />}
                      {t("ListOfCarsDays")}{" "}
                    </h6>
                  </div>
                </div>
                <div className="cardetails">
                  <h6>
                    {t("ListOfCarsManuel")} {<br />} 2015
                  </h6>
                  <h6>{t("ListOfCarsGasoline")}</h6>
                </div>
                <div className="car-go-button">
                  <button className="rentbutton">
                    {" "}
                    {t("ListOfCarsButton")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListOfCars;
