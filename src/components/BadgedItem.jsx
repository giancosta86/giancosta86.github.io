import React from "react"
import SmartIcon from "./SmartIcon"
import classNames from "classnames"

export default ({ icon, text, url, badgeStyle, children }) => {
  let iconDiv = icon ? (
    <div className="d-flex justify-content-center">
      <SmartIcon icon={icon} />
    </div>
  ) : null

  let textSpan = url ? <a href={url}>{text}</a> : <span>{text}</span>

  let badge = children ? (
    <div className="flex-1 d-flex justify-content-end align-items-center">
      <div className={classNames("badge badge-pill", badgeStyle)}>
        {children}
      </div>
    </div>
  ) : null

  return (
    <div className="badged-item list-group-item d-flex justify-content-start align-items-center">
      {iconDiv}
      {textSpan}
      {badge}
    </div>
  )
}
