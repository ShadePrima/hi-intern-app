import React from "react";
import voting from "./../../assets/icons/Home/navigation/voting.png";
import breeds from "./../../assets/icons/Home/navigation/breeds.png";
import galery from "./../../assets/icons/Home/navigation/galery.png";

const Navigation = () => {
  return (
    <div>
      {" "}
      <section className="section">
        <h1>Hi intern!</h1>
        <p>Welcome to MI 2022 Front-end test</p>
        <div className="navigation">
          <p className="navigation-title">Lets start using The Cat API</p>
          <div className="navigation-items">
            <div className="navigation-item">
              <img src={voting} alt="VOTING" />
              <p>VOTING</p>
            </div>
            <div className="navigation-item">
              <img src={breeds} alt="VOTING" />
              <p>BREEDS</p>
            </div>
            <div className="navigation-item">
              <img src={galery} alt="VOTING" />
              <p>GALLERY</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
