import React from "react"
import { Helmet } from "react-helmet"
import links from "../data/links.json"
import { StaticQuery, graphql } from "gatsby"

export default props => (
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

      let title = props.title ? `${props.title} - ${siteTitle}` : siteTitle
      let description = props.description ? props.description : siteDescription

      return (
        <Helmet>
          <title>{title}</title>

          <meta name="description" content={description} />

          <meta name="author" content="Gianluca Costa" />

          <link rel="icon" href={"/favicon.ico"} />

          {props.tags && (
            <meta name="keywords" content={props.tags.join(", ")} />
          )}

          <link
            rel="alternate"
            type="application/atom+xml"
            title={links.newsFeedPath}
          />
        </Helmet>
      )
    }}
  />
)
