import React from "react"
import links from "../data/links.json"
import { Link } from "gatsby"
import SmartIcon from "./SmartIcon.jsx"

export default () => (
  <div className="dropdown-menu">
    <a className="dropdown-item" href={links.linkedIn}>
      <SmartIcon icon="fab/linkedin" />
      LinkedIn
    </a>

    <a className="dropdown-item" href={links.twitter}>
      <SmartIcon icon="fab/twitter" />
      Twitter
    </a>

    <div className="dropdown-divider"></div>

    <Link className="dropdown-item" to={links.cvPath}>
      <SmartIcon icon="id-card" />
      Download CV
    </Link>

    <div className="dropdown-divider"></div>

    <a className="dropdown-item" href={links.email}>
      <SmartIcon icon="fas/envelope" />
      E-mail
    </a>
  </div>
)
