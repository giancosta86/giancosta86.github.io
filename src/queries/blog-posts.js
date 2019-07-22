import { graphql } from "gatsby"

export const blogPostsFragment = graphql`
  fragment BlogPosts on Query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }

      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      nodes {
        fileAbsolutePath

        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
`
