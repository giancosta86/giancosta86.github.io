import React from "react"
import ArticlePage from "../templates/ArticlePage"
import { getPosts } from "../utils/post-utils"
import PostList from "../components/PostList"
import { graphql } from "gatsby"
import "../queries/blog-posts"

export default ({ data }) => {
  return (
    <ArticlePage title="Blog">
      <PostList posts={getPosts(data)} />
    </ArticlePage>
  )
}

export const query = graphql`
  query {
    ...BlogPosts
  }
`
