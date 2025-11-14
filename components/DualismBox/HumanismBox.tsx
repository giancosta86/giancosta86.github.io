import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./HumanismBox.module.scss";

const humanismMarkdown = `
## 🌈 Humanism

* 💡 Curious **learner**, passionate **teacher**

* 🌼 **C2** level in *English* (CAE, BEC Higher)

* 🌹 **C1** level in *Spanish* (SIELE)

* 🌷 **C1** level in *French* (DALF)

* 🌸 **HSK 3** in *Chinese*

* 🌐 Constantly exploring **Linguistics** and *new languages*

* 💭 Fond of **Philosophy** as the fine art of *thinking*

* 🎶 [YouTube channel](https://www.youtube.com/@giancosta86), with my amateur **music** performances

* 🏺 Award in national competition of **Latin translation**, in 2003
`;

export const HumanismBox = () => (
  <div className={styles.humanismBox}>
    <ReactMarkdown>{humanismMarkdown}</ReactMarkdown>
  </div>
);
