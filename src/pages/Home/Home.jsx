import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomeImg from "../../components/HomeImg/HomeImg";
import Navigation from "../../components/Navigation/Navigation";
import Breeds from "../Breeds/Breeds";
import Gallery from "../Gallery/Gallery";
import Voting from "../Voting/Voting";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      home
      <div className="wrapper">
        <div className="left">
          <Header />
          <Navigation />
        </div>

        <div className="rigth">
          <HomeImg />
        </div>
      </div>
    </div>
  );
};

export default Home;
