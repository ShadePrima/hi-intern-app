import React from "react";
import { Link } from "react-router-dom";

import likeHeader from "../../assets/img/voting/like.png";

import arrowLeft from "../../assets/img/voting/arrow left 1.png";
import cat from "../../assets/img/voting/cat.png";

import leftBackground from "../../assets/img/voting/Button-panel/left-background.png";
import centrBackground from "../../assets/img/voting/Button-panel/centr-background.png";
import rightBackground from "../../assets/img/voting/Button-panel/right-background.png";
import likePanel from "../../assets/img/voting/Button-panel/like.png";
import heartPanel from "../../assets/img/voting/Button-panel/heart-center.png";
import disLikePanel from "../../assets/img/voting/Button-panel/dis-like-left.png";

import styles from "./VotingPage.module.scss";

const VotingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bottomSection}>
        <section className={styles.section}>
          <div className={styles.topButton}>
            <div className={styles.arrowLeft}>
              <img src={arrowLeft} alt="arrow-left" />
            </div>
            <Link to="/">
              <div className={styles.sectionButton}>VOTING</div>
            </Link>
          </div>

          <div className={styles.content}>
            <img className={styles.contenImgCat} src={cat} alt="Cat" />
            <div className={styles.panelButton}>
              <div className={styles.left}>
                <img
                  className={styles.backgraund1}
                  src={leftBackground}
                  alt="Left"
                />
                <img className={styles.likes} src={likePanel} alt="Like" />
              </div>
              <div className={styles.left}>
                <img
                  className={styles.backgraund2}
                  src={centrBackground}
                  alt="Centet"
                />
                <img className={styles.likes2} src={heartPanel} alt="Heart" />
              </div>
              <div className={styles.left}>
                <img
                  className={styles.backgraund3}
                  src={rightBackground}
                  alt="Right"
                />
                <img
                  className={styles.likes3}
                  src={disLikePanel}
                  alt="DisLike"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerItems}>
            <div className={styles.footerItem}>
              <div className={styles.footerLeft}>
                <div className={styles.time}>10:24</div>
                <div className={styles.text}>
                  Image ID: fQSunHvl8 was added to Favourites
                </div>
              </div>
              <div className={styles.footerLike}>
                <img src={likeHeader} alt="Like" />
              </div>
            </div>
            <div className={styles.footerItem}>
              <div className={styles.footerLeft}>
                <div className={styles.time}>10:24</div>
                <div className={styles.text}>
                  Image ID: fQSunHvl8 was added to Favourites
                </div>
              </div>
              <div className={styles.footerLike}>
                <img src={likeHeader} alt="Like" />
              </div>
            </div>
            <div className={styles.footerItem}>
              <div className={styles.footerLeft}>
                <div className={styles.time}>10:24</div>
                <div className={styles.text}>
                  Image ID: fQSunHvl8 was added to Favourites
                </div>
              </div>
              <div className={styles.footerLike}>
                <img src={likeHeader} alt="Like" />
              </div>
            </div>
            <div className={styles.footerItem}>
              <div className={styles.footerLeft}>
                <div className={styles.time}>10:24</div>
                <div className={styles.text}>
                  Image ID: fQSunHvl8 was added to Favourites
                </div>
              </div>
              <div className={styles.footerLike}>
                <img src={likeHeader} alt="Like" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VotingPage;
