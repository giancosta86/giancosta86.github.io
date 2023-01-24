import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./HumanismBox.module.scss";

const humanismMarkdown = `
## 🌈 Humanism

* 💡 Curious **learner**, passionate **teacher**

* 🌼 **C1** level in *English* (CAE, BEC Higher)

* 🌷 **C1** level in *French* (DALF)

* 🌐 Constantly exploring **Linguistics** and *new languages*

* 💭 Fond of **Philosophy** as the fine art of *thinking*

* 🌹 Around **C1** in *Spanish*

* 🏳️‍🌈 Proudly supporting **human** rights and **equality**

* 🎶 [YouTube channel](https://www.youtube.com/channel/UCsPuMOLKfBokZxr21PivQaw), with my amateur **music** performances

* 🏺 Award in national competition of **Latin translation**, in 2003
`;

export const HumanismBox = () => (
  <div className={styles.humanismBox}>
    <ReactMarkdown>{humanismMarkdown}</ReactMarkdown>
  </div>
);
