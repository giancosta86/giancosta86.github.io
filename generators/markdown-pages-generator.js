import path from "path"
import { runQuery } from "../src/utils/graphql-utils"
import { getPathAtRootWithoutExtension } from "../src/utils/path-utils"

export const generateMarkdownPages = (graphql, createPage) => {
  return runQuery(
    graphql,

    `query {
        allMarkdownRemark {
          nodes {
            id
            fileAbsolutePath
          }
        }
      }`
  ).then(data =>
    data.allMarkdownRemark.nodes.forEach(node => {
      let pagePath = getPagePath(node)
      let pageTemplate = resolvePageTemplate(node)

      createPage({
        path: pagePath,
        component: pageTemplate,
        context: {
          nodeId: node.id
        }
      })
    })
  )
}

const isBlogNode = markdownNode =>
  markdownNode.fileAbsolutePath.includes("/blog/")

const resolvePageTemplate = markdownNode =>
  path.resolve(
    isBlogNode(markdownNode)
      ? "src/templates/PostPage.jsx"
      : "src/templates/MarkdownPage.jsx"
  )

const getPagePath = markdownNode => {
  let basePath = getPathAtRootWithoutExtension(markdownNode.fileAbsolutePath)

  return isBlogNode(markdownNode) ? `/blog${basePath}` : basePath
}
