import React from "react"
import Card from "./Card"
import SmartIcon from "../SmartIcon"
import classNames from "classnames"

export default ({
  icon,
  title,
  description,
  buttonIcon,
  buttonText,
  buttonClass,
  childBlockId,
  children
}) => (
  <Card icon={icon} title={title} description={description}>
    <div className="card-footer text-center">
      <button
        className={classNames("btn btn-sm collapsed", buttonClass)}
        type="button"
        data-toggle="collapse"
        data-target={`#${childBlockId}`}
      >
        <SmartIcon icon={buttonIcon} /> {buttonText}
      </button>
    </div>

    <div id={childBlockId} className="collapse">
      {children}
    </div>
  </Card>
)
