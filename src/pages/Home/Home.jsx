import React from "react";

import Header from "../../components/Header/Header";
import HomeImg from "../../components/HomeImg/HomeImg";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <div>
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
