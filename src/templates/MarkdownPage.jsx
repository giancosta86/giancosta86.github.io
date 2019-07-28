import React from "react"
import { graphql } from "gatsby"
import ArticlePage from "./ArticlePage"

export default ({ data, bodyClass, children }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <ArticlePage
      title={frontmatter.title}
      description={frontmatter.description}
      keywords={frontmatter.tags}
      bodyClass={bodyClass}
      dateTime={frontmatter.date}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />

      {children}
    </ArticlePage>
  )
}

export const pageQuery = graphql`
  query($nodeId: String!) {
    markdownRemark(id: { eq: $nodeId }) {
      frontmatter {
        title
        date
        description
        tags
      }
      html
    }
  }
`
