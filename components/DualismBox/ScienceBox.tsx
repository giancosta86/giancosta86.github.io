import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./ScienceBox.module.scss";

const scienceMarkdown = `
## 🧬 Science

* ⌨️ Passionate **software craftsman** *since 1999*

* 💼 More than **7 years** of experience in *IT companies*

* 💻 **MSc** and **BSc** in **Computer Engineering** - *110 cum laude*

* 🎓 One of the **30 best Engineering students** in Bologna, in 2016

* 🤖 More than **80 open source projects** on [GitHub](https://github.com/giancosta86)

* 🐧 **Linux** user *since 2004* - mainly on Debian-based distros

* 📽️ **Presentations** on [SpeakerDeck](https://speakerdeck.com/giancosta86)

* 📦 **TypeScript** and **JavaScript** packages on [NPM](https://www.npmjs.com/~giancosta86)

* 🐍 **Python libraries** on [PyPI](https://pypi.org/user/giancosta86/)
`;

export const ScienceBox = () => (
  <div className={styles.scienceBox}>
    <ReactMarkdown children={scienceMarkdown} />
  </div>
);
