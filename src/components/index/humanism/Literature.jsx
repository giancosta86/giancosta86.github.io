import React from "react"
import LinkCard from "../LinkCard"
import links from "../../../data/links"

export default () => (
  <LinkCard
    icon="fas/theater-masks"
    title="Literature"
    description={
      <>
        I love literature - especially <b>poetry</b>: from my passion for{" "}
        <b>opera</b> stem my compositions in <b>ancient Italian</b>
      </>
    }
    buttonText="Visit my literature gallery"
    buttonClass="btn-success"
    url={links.arcadia}
  />
)
