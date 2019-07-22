import React from "react"
import links from "../data/links.json"
import { Link } from "gatsby"
import SmartIcon from "./SmartIcon.jsx"

export default () => (
  <div className="dropdown-menu">
    <Link className="dropdown-item" to={links.blogPath}>
      <SmartIcon icon="fas/pen" /> Posts
    </Link>

    <Link className="dropdown-item" to={links.blogTagsPath}>
      <SmartIcon icon="fas/tags" /> Tags
    </Link>
  </div>
)
