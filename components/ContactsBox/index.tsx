import React from "react";

import styles from "./index.module.scss";

export const ContactsBox = () => (
  <div className={styles.contactsBox}>
    <a href="/cv_costa_en.pdf?latest=2022-05-25">Download CV</a>

    <a href="https://www.linkedin.com/in/giancosta86">LinkedIn</a>

    <a href="mailto:gianluca@gianlucacosta.info">E-mail</a>
  </div>
);