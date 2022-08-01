import React from "react";
import GalleryCats from "../../components/GalleryCats/GalleryCats";
import Header from "../../components/Header/Header";
import styles from "./Breeds.module.scss";

import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";

const Breeds = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="left">
          <Header />
          <Navigation />
        </div>

        <div className="rigth">
          <Search />
          <section className={styles.section}>
          <div className={styles.buttonWrapper}>
              <div className={styles.buttonItem}>
                
              </div>
          </div>
            <GalleryCats />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Breeds;
