import React from "react"
import SmartIcon from "../SmartIcon"

export default ({ icon, title, description, children }) => (
  <div className="card mb-4">
    <div className="card-header text-center">
      <SmartIcon icon={icon} /> {title}
    </div>

    <div className="card-body">
      <p className="card-text">{description}</p>
    </div>

    {children}
  </div>
)
