import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import ReactMarkdown from 'react-markdown'
import { scienceMarkdown } from "../data/dualism/science"
import { humanismMarkdown } from "../data/dualism/humanism"

import { CourseReport } from "@giancosta86/omnicourse"
import allCourses from "../data/learning/all-courses"


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Gianluca Costa's Creations</title>
        <meta name="author" value="Gianluca Costa" />
        <link rel="canonical" href="https://gianlucacosta.info/" />
        <meta name="description" content="Gianluca Costa's personal website" />
        <meta name="keywords" content="Gianluca Costa,science,humanism" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Gianluca Costa's Creations</h1>
        </div>

        <div className={styles.portraitBox}>
          <img className={styles.portrait} alt="Gianluca Costa's portrait" src="gian.jpg" />
        </div>

        <div className={styles.signatureBox}>
          Elegance always matters
        </div>


        <div className={styles.dualism}>
          <div className={styles.science}>
            <ReactMarkdown children={scienceMarkdown} />
          </div>

          <div className={styles.humanism}>
            <ReactMarkdown children={humanismMarkdown} />
          </div>
        </div>

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


        <div className={styles.contactsBox}>
          <a href="cv_costa_en.pdf">Download CV</a>

          <a href="https://www.linkedin.com/in/giancosta86">LinkedIn</a>
          <a href="https://twitter.com/giancosta86">Twitter</a>
          <a href="mailto:gianluca@gianlucacosta.info">E-mail</a>
        </div>
      </div>
    </>
  )
}
