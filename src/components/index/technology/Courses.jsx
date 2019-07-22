import React from "react"
import LinkCard from "../LinkCard"
import links from "../../../data/links.json"

export default () => (
  <LinkCard
    icon="fas/book-reader"
    title="Continuous learner"
    description={
      <>
        I never stop <strong>learning new ideas</strong> - especially by reading{" "}
        <b>books</b> and watching <b>online courses</b>
      </>
    }
    buttonText="Interactive report"
    buttonClass="btn-primary"
    url={links.courses}
  />
)
