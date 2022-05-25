import Link from "next/link";
import styles from "./index.module.scss";

import { DualismBox } from "../components/DualismBox";
import { LearningReport } from "../components/LearningReport";
import { ContactsBox } from "../components/ContactsBox";
import { TitleBox } from "../components/TitleBox";
import { PageHead } from "../components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead pagePath="/" imagePath="/preview.png" />

      <div className={styles.container}>
        <TitleBox />

        <DualismBox />

        <LearningReport />

        <ContactsBox />
      </div>

      <footer className={styles.mainFooter}>
        <Link href="/privacy">Privacy policy</Link>
      </footer>
    </>
  );
}
