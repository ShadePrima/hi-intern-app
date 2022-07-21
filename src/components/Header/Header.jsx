import React from "react";
import { Link } from "react-router-dom";
import foot from "./../../assets/icons/Home/header/foot.png";
import textHeader from "./../../assets/icons/Home/header/PetsPaw.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <header className={styles.header}>
          <img className={styles.logo} src={foot} alt="Logo" />
          <img className={styles.text} src={textHeader} alt="Logo" />
        </header>
      </Link>
    </div>
  );
};

export default Header;
