import React from "react";
import { scienceMarkdown } from "./science";
import { humanismMarkdown } from "./humanism";
import ReactMarkdown from "react-markdown";
import styles from "./index.module.scss";

export const DualismBox = () => (
  <div className={styles.dualismBox}>
    <div className={styles.scienceBox}>
      <ReactMarkdown children={scienceMarkdown} />
    </div>

    <div className={styles.humanismBox}>
      <ReactMarkdown children={humanismMarkdown} />
    </div>
  </div>
);
