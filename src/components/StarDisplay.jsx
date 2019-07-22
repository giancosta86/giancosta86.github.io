import React from "react"
import SmartIcon from "./SmartIcon"

export default ({ stars }) => {
  let integerStars = Math.floor(stars)

  let remainderStars = stars - integerStars

  let renderedIntegerStars = Array.from(Array(integerStars).keys()).map(
    index => <SmartIcon key={index} icon="fas/star" />
  )

  let renderedHalfStar = remainderStars ? (
    <SmartIcon icon="fas/star-half" />
  ) : null

  return (
    <>
      {renderedIntegerStars}
      {renderedHalfStar}
    </>
  )
}
