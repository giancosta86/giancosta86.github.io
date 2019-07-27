import path from "path"
import { saveToJson } from "../src/utils/fs-utils"
import { runQuery } from "../src/utils/graphql-utils"
import { getPosts } from "../src/utils/post-utils"

const NewsOutputFile = path.resolve("public/news.json")

export const generateJsonNewsFeed = graphql =>
  runQuery(
    graphql,

    `
    query {
      site {
        siteMetadata {
          title
        }
      }
      
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
  )
    .then(data => [data.site.siteMetadata, getPosts(data)])
    .then(buildFeed)

const buildFeed = ([siteMetadata, posts]) => {
  const siteUrl = `https://gianlucacosta.info`

  let postEntries = posts.map(post => ({
    title: post.title,
    date_published: `${post.date}T00:00:00+00:00`,
    id: `${siteUrl}${post.path}`,
    url: `${siteUrl}${post.path}`
  }))

  let feed = {
    version: "https://jsonfeed.org/version/1",
    title: `${siteMetadata.title} - News`,
    description: "News feed for JSON-based clients",
    home_page_url: `${siteUrl}/`,
    feed_url: `${siteUrl}/news.json`,
    author: {
      name: "Gianluca Costa",
      url: `${siteUrl}/`
    },
    items: [...postEntries]
  }

  return saveToJson(NewsOutputFile, feed)
}
