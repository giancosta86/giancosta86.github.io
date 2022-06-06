import React from "react";
import classNames from "classnames";

import {
  CachingTaxonomyRepository,
  FetchingTaxonomyRepository,
  OmniCourse,
  TaxonomyKey,
  RawTaxonomy
} from "@giancosta86/omnicourse";

import styles from "./index.module.scss";
import { useMobileDetection } from "../../hooks/useMobileDetection";

async function fetchTaxonomyKeys(): Promise<readonly TaxonomyKey[]> {
  const fetchResult = await fetch("/learning/index.json");

  if (!fetchResult.ok) {
    throw new Error("Non-ok fetch() response");
  }

  return fetchResult.json();
}

async function fetchRawTaxonomy(taxonomyId: string): Promise<RawTaxonomy> {
  const taxonomyPath = `/learning/${taxonomyId}.json`;

  const fetchResult = await fetch(taxonomyPath);

  if (!fetchResult.ok) {
    throw new Error("Non-ok fetch() response");
  }

  return fetchResult.json();
}

const learningRepository = new CachingTaxonomyRepository(
  new FetchingTaxonomyRepository(fetchRawTaxonomy)
);

export const LearningReport = () => {
  const onMobile = useMobileDetection();

  return (
    <div className={styles.learningReport}>
      <header className={styles.header}>
        <h2 id="learning" className={styles.title}>
          Interactive learning report
        </h2>
        <p className={styles.instructions}>
          (click on the pie to explore, on the breadcrumbs to revert)
        </p>
      </header>

      <OmniCourse
        taxonomySelectLabel="Period:"
        taxonomyKeysFetcher={fetchTaxonomyKeys}
        taxonomyRepository={learningRepository}
        loadingNode={
          <div className={classNames(styles.spinnerBox, "imageBox")}>
            <img alt="Loading..." src="/spinner.svg" />
          </div>
        }
        customClassName={styles.omniCourse}
        chartSettings={{
          chartHeight: onMobile ? 350 : 420,
          outerRadius: onMobile ? "90%" : "70%",
          innerRadius: onMobile ? "45%" : "50%"
        }}
        onMobile={onMobile}
      />
    </div>
  );
};
