import React from "react";
import { HumanismBox } from "./HumanismBox";
import styles from "./index.module.scss";
import { ScienceBox } from "./ScienceBox";

export const DualismBox = () => (
  <div className={styles.dualismBox}>
    <ScienceBox />

    <HumanismBox />
  </div>
);
