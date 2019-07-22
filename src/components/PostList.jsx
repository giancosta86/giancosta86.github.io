import React from "react"
import PostEntry from "./PostEntry"

export default ({ posts }) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        {posts.map(post => (
          <PostEntry key={post.path} post={post} />
        ))}
      </div>
    </div>
  </div>
)
