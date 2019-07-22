import links from "../data/links.json"
import { getPathAtRootWithoutExtension } from "./path-utils"

export const getPosts = data => {
  let postNodes = data.allMarkdownRemark.nodes

  let posts = postNodes.map(({ frontmatter, fileAbsolutePath }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    tags: frontmatter.tags,
    path: `${links.blogPath}${getPathAtRootWithoutExtension(fileAbsolutePath)}`
  }))

  return posts
}
