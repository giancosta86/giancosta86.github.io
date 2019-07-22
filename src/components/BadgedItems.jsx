import React from "react"
import BadgedItem from "./BadgedItem"
import StarDisplay from "./StarDisplay"
import links from "../data/links.json"
import SmartIcon from "./SmartIcon"

export default ({ items, badgeStyle }) =>
  items.map(item => {
    let badge = item.stars ? (
      <StarDisplay stars={item.stars} />
    ) : item.badgeIcon ? (
      <SmartIcon icon={item.badgeIcon} />
    ) : (
      item.badge
    )
    let url = item.url || (item.urlKey && links[item.urlKey])

    return (
      <BadgedItem
        key={item.text}
        icon={item.icon}
        text={item.text}
        url={url}
        badgeStyle={badgeStyle}
      >
        {badge}
      </BadgedItem>
    )
  })
