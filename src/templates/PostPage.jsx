import React from "react"
import MarkdownPage from "./MarkdownPage"
import TagLabels from "../components/TagLabels"
import { graphql } from "gatsby"

export default ({ data, bodyClass }) => (
  <MarkdownPage data={data} bodyClass={bodyClass}>
    <hr className="mt-3 mb-4" />

    <TagLabels tags={data.markdownRemark.frontmatter.tags} showHeading={true} />
  </MarkdownPage>
)

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
