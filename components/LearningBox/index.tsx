import React from "react";

import { CourseReport } from "@giancosta86/omnicourse";
import allCourses from "../../data/learning/all-courses";

import styles from "./index.module.scss";

export const LearningBox = () => (
  <div className={styles.learningBox}>
    <h2 id="learning">Interactive learning report</h2>

    <CourseReport
      loader={
        <img
          alt="Loading..."
          src="/loader.gif"
          style={{
            width: "50%",
            height: "20%",
            margin: "10% auto"
          }}
        />
      }
      sourceData={allCourses}
      rootLabel="Period:"
      className="learningReport"
    />
  </div>
);
