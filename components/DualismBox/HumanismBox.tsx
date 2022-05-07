import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./HumanismBox.module.scss";

const humanismMarkdown = `
## 🌈 Humanism

* 💡 Curious **learner**, passionate **teacher**

* 🇬🇧 **C1** level in *English* (CAE, BEC Higher)

* 🇫🇷 **C1** level in *French* (DALF)

* 🇩🇪 **B1** level in *German* (Goethe Zertifikat)

* 💭 Fond of **Philosophy** as a way to explore oneself and the cosmos

* 🇪🇸 Actively learning **Spanish**

* 🏳️‍🌈 Proudly supporting **human** rights and **equality**

* 🎶 [YouTube channel](https://www.youtube.com/channel/UCsPuMOLKfBokZxr21PivQaw), with my amateur **music** performances

* 🏺 [Award](https://www.instagram.com/p/CMo_6ZunQkM) in national competition of **Latin translation**, in 2003
`;

export const HumanismBox = () => (
  <div className={styles.humanismBox}>
    <ReactMarkdown children={humanismMarkdown} />
  </div>
);
