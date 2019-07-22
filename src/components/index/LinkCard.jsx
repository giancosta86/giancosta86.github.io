import React from "react"
import Card from "./Card"
import SmartIcon from "../SmartIcon"
import classNames from "classnames"

export default ({ icon, title, description, buttonText, buttonClass, url }) => (
  <Card icon={icon} title={title} description={description}>
    <div className="card-footer text-center">
      <a href={url} className={classNames("btn btn-sm", buttonClass)}>
        {buttonText}
        <SmartIcon icon="fas/arrow-circle-right" className="spaced" />
      </a>
    </div>
  </Card>
)
