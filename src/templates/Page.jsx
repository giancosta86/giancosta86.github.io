import React from "react"
import Metadata from "../components/Metadata"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import css from "./Page.module.scss"

export default ({ title, children, bodyClass }) => (
  <>
    {bodyClass && <Helmet bodyAttributes={{ class: bodyClass }} />}

    <Metadata title={title} />

    <div className="d-flex flex-column vw-100 vh-100">
      <Header />

      <div id={css.mainArea} className="flex-1">
        {children}
      </div>
    </div>
  </>
)
