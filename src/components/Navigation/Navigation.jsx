import React from "react";
import voting from "./../../assets/icons/Home/navigation/voting.png";
import breeds from "./../../assets/icons/Home/navigation/breeds.png";
import galery from "./../../assets/icons/Home/navigation/galery.png";
import { Link } from "react-router-dom";
import VotingItem from "../NavigationItems/VotingItem";

const Navigation = () => {
  return (
    <div>
      <section className="section">
        <h1>Hi intern!</h1>
        <p>Welcome to MI 2022 Front-end test</p>
        <div className="navigation">
          <p className="navigation-title">Lets start using The Cat API</p>
          <nav className="navigation-items">
            <Link to="/voting">
              <div className="navigation-item">
                <img src={voting} alt="VOTING" />
                <p>VOTING</p>
              </div>
            </Link>
            <Link to="/breeds">
              <div className="navigation-item">
                <img src={breeds} alt="VOTING" />
                <p>BREEDS</p>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="navigation-item">
                <img src={galery} alt="VOTING" />
                <p>GALLERY</p>
              </div>
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
