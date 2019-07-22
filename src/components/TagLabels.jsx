import React from "react"
import links from "../data/links.json"
import SmartIcon from "./SmartIcon.jsx"

export default ({ tags, showHeading }) => {
  if (!tags) {
    return <></>
  }

  let sortedTags = [...tags].sort()

  let heading = showHeading ? (
    <span className="font-weight-bold mr-2">
      <SmartIcon icon="fas/tags" />
      Tags:
    </span>
  ) : null

  return (
    <div className="tags d-flex align-items-center">
      {heading}
      <div className="flex-1  mt-n3">
        {sortedTags.map(tag => (
          <a
            key={tag}
            href={`${links.blogTagsPath}#${tag}`}
            className="btn btn-info btn-sm mt-3 mr-1"
          >
            <SmartIcon icon="fas/tag" /> {tag}
          </a>
        ))}
      </div>
    </div>
  )
}
