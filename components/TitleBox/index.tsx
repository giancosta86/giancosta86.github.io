import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

export const TitleBox = () => (
  <div className={styles.titleBox}>
    <div className={styles.title}>
      <h1>Gianluca Costa&apos;s Creations</h1>
    </div>

    <div className={classNames(styles.portraitBox, "imageBox")}>
      <img
        className={styles.portrait}
        alt="Gianluca Costa's portrait"
        src="/gian.jpg?latest=2022-05-25"
      />
    </div>

    <div className={styles.signatureBox}>Elegance always matters</div>

    <a href="#learning" className={styles.learningButton}>
      🎓Learning experience
    </a>
  </div>
);