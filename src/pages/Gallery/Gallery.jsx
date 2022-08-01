import React from "react";
import GalleryCats from "../../components/GalleryCats/GalleryCats";
import Header from "../../components/Header/Header";
import HomeImg from "../../components/HomeImg/HomeImg";
import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";

const Gallery = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="left">
          <Header />
          <Navigation />
        </div>

        <div className="rigth">
          <Search />
          {/* <GalleryCats /> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
