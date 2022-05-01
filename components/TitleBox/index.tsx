import React from "react";
import styles from "./index.module.scss";

export const TitleBox = () => (
  <>
    <div className={styles.title}>
      <h1>Gianluca Costa's Creations</h1>
    </div>

    <div className={styles.portraitBox}>
      <img
        className={styles.portrait}
        alt="Gianluca Costa's portrait"
        src="gian.jpg"
      />
    </div>

    <div className={styles.signatureBox}>Elegance always matters</div>
  </>
);
