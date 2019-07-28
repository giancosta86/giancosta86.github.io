import React from "react"
import { Helmet } from "react-helmet"
import links from "../data/links.json"
import { StaticQuery, graphql } from "gatsby"

export default ({ title, description, keywords }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `}
    render={data => {
      let siteTitle = data.site.siteMetadata.title
      let siteDescription = data.site.siteMetadata.description

      let actualTitle = title ? `${title} - ${siteTitle}` : siteTitle

      let actualDescription = description ? description : siteDescription

      return (
        <Helmet>
          <title>{actualTitle}</title>

          <meta name="description" content={actualDescription} />

          <meta name="author" content="Gianluca Costa" />

          <link rel="icon" href={"/favicon.ico"} />

          {keywords && <meta name="keywords" content={keywords.join(", ")} />}

          <link
            rel="alternate"
            type="application/json"
            title={links.newsFeedPath}
          />
        </Helmet>
      )
    }}
  />
)
