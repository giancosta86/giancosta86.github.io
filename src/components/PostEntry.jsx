import React from "react"
import { formatDate } from "../utils/datetime-utils"
import TagLabels from "./TagLabels"
import { Link } from "gatsby"
import css from "./PostEntry.module.scss"
import classNames from "classnames"

export default ({ post }) => (
  <div className={classNames("card mb-4 border-info", css.post)}>
    <div className="card-body">
      <time className="annotation" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <p className={classNames("card-title", css.postTitle)}>
        <Link to={post.path} className="text-primary">
          {post.title}
        </Link>
      </p>
    </div>

    <div className="card-footer">
      <TagLabels tags={post.tags} showHeading={true} />
    </div>
  </div>
)
