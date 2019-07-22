import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ icon, className }) => {
  let iconComponents = icon.split("/")

  return (
    <FontAwesomeIcon
      className={className}
      icon={iconComponents.length > 1 ? iconComponents : iconComponents[0]}
    />
  )
}
