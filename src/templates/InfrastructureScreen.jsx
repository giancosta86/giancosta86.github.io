import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Metadata from "../components/Metadata"
import css from "./InfrastructureScreen.module.scss"

export default ({ subtitle, children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={css.infrastructureScreen}>
        <Metadata title={subtitle} />

        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>

        <h2>{subtitle}</h2>

        <div className={css.message}>
          {children}

          <p>
            If you wish, you can now return to the <Link to="/">home page</Link>
            .
          </p>
        </div>
      </div>
    )}
  />
)
