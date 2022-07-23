import React from "react";

import likeHeader from "../../assets/img/voting/like.png";
import heartHeader from "../../assets/img/voting/heart.png";
import disLikeHeader from "../../assets/img/voting/dislike.png";
import searchButton from "../../assets/img/voting/search-button.png";

import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.search}>
          <input placeholder="Search for breeds by name" />
          <img src={searchButton} alt="Search" />
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <img src={likeHeader} alt="Like" />
          </div>
          <div className={styles.button}>
            <img src={heartHeader} alt="Like" />
          </div>
          <div className={styles.button}>
            <img src={disLikeHeader} alt="Like" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Search;
