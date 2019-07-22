import React from "react"
import links from "../data/links.json"
import { Link } from "gatsby"
import SmartIcon from "./SmartIcon"

export default () => (
  <div className="dropdown-menu">
    <Link className="dropdown-item" to={links.termsPath}>
      <SmartIcon icon="fas/info-circle" />
      Terms of use
    </Link>

    <Link className="dropdown-item" to={links.privacyPath}>
      <SmartIcon icon="fas/user-secret" />
      Privacy policy
    </Link>

    <div className="dropdown-divider"></div>

    <a className="dropdown-item" href={links.newsFeedPath}>
      <SmartIcon icon="fas/rss" />
      Json news
    </a>
  </div>
)
