import React from "react";
import styles from "./index.module.scss";

export const TitleBox = () => (
  <div className={styles.titleBox}>
    <div className={styles.title}>
      <h1>Gianluca Costa&apos;s Creations</h1>
    </div>

    <div className={styles.portraitBox}>
      <img
        className={styles.portrait}
        alt="Gianluca Costa's portrait"
        src="/gian.jpg?latest-modification=2022-05-25"
      />
    </div>

    <div className={styles.signatureBox}>Elegance always matters</div>

    <a href="#learning" className={styles.learningButton}>
      🎓Learning experience
    </a>
  </div>
);
