import React from "react";

import Header from "../../components/Header/Header";

import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";

import VotingPage from "../../components/VotingPage/VotingPage";

const Voting = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="left">
          <Header />
          <Navigation />
        </div>

        <div className="rigth">
          <Search />
          <VotingPage />
        </div>
      </div>
    </div>
  );
};

export default Voting;
