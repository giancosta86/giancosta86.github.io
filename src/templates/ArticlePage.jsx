import React from "react"
import Page from "./Page"
import { formatDate } from "../utils/datetime-utils"
import classNames from "classnames"
import css from "./ArticlePage.module.scss"

export default ({
  title,
  description,
  keywords,
  bodyClass,
  dateTime,
  children
}) => (
  <Page
    title={title}
    description={description}
    keywords={keywords}
    bodyClass={bodyClass}
  >
    <article className={classNames(css.articlePage, "p-2 p-lg-3")}>
      <header className="mb-4 mb-md-5">
        <h1>{title}</h1>

        {dateTime && (
          <time className="d-block text-center annotation" dateTime={dateTime}>
            {formatDate(dateTime)}
          </time>
        )}
      </header>

      <div className={css.content}>{children}</div>
    </article>
  </Page>
)
