import React from "react"
import ArticlePage from "../../templates/ArticlePage"
import TagLabels from "../../components/TagLabels"
import { getPosts } from "../../utils/post-utils"
import { graphql, Link } from "gatsby"
import "../../queries/blog-posts"
import { formatDate } from "../../utils/datetime-utils"

export default ({ data }) => {
  let posts = getPosts(data)

  let allTags = posts.flatMap(post => post.tags)

  let uniqueTags = new Set(allTags)

  let sortedTags = Array.from(uniqueTags).sort()

  return (
    <ArticlePage title="Blog tags">
      <TagLabels showHeading={false} tags={sortedTags} />

      <hr />

      {sortedTags.map(tag => (
        <div key={tag} className="mb-5">
          <h2 id={tag}>{tag}</h2>

          {posts
            .filter(post => post.tags.includes(tag))
            .map(post => (
              <div key={post.path} className="card mb-4">
                <div className="card-header">
                  <span className="annotation">{formatDate(post.date)}</span>{" "}
                  <Link className="font-weight-bold" to={post.path}>
                    {post.title}
                  </Link>
                </div>

                <div className="card-body">
                  <TagLabels showHeading={true} tags={post.tags} />
                </div>
              </div>
            ))}
        </div>
      ))}
    </ArticlePage>
  )
}

export const query = graphql`
  query {
    ...BlogPosts
  }
`
