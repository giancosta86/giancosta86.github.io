import Link from "next/link";
import styles from "./index.module.scss";

import { DualismBox } from "../components/DualismBox";
import { LearningBox } from "../components/LearningBox";
import { ContactsBox } from "../components/ContactsBox";
import { TitleBox } from "../components/TitleBox";
import { SiteHead } from "../components/SiteHead";

export default function Home() {
  return (
    <>
      <SiteHead pagePath="/" />

      <main>
        <div className={styles.container}>
          <TitleBox />

          <DualismBox />

          <LearningBox />

          <ContactsBox />
        </div>
      </main>

      <footer className="mainFooter">
        <Link href="/privacy">Privacy policy</Link>
      </footer>
    </>
  );
}
