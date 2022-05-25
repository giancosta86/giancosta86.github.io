import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

export const TitleBox = () => (
  <div className={styles.titleBox}>
    <div className={styles.title}>
      <h1>Gianluca Costa&apos;s Creations</h1>
    </div>

    <div className={styles.portraitBox}>
      <Image
        className={styles.portrait}
        alt="Gianluca Costa's portrait"
        src="/gian.jpg"
        layout="fill"
      />
    </div>

    <div className={styles.signatureBox}>Elegance always matters</div>

    <a href="#learning" className={styles.learningButton}>
      🎓Learning experience
    </a>
  </div>
);
