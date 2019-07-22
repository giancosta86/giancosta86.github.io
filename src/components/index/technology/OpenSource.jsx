import React from "react"
import ExpandableCard from "../ExpandableCard"
import BadgedItems from "../../BadgedItems"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allOpenSourceJson {
          nodes {
            text
            icon
            urlKey
          }
        }
      }
    `}
    render={data => (
      <ExpandableCard
        icon="fab/github"
        title="Open source developer"
        description={
          <>
            I love putting my <strong>knowledge into practice</strong>: my
            GitHub account consists of more than <strong>70 projects</strong>
          </>
        }
        buttonIcon="far/lightbulb"
        buttonText="Explore solutions"
        buttonClass="btn-primary"
        childBlockId="open-source-details"
      >
        <div className="card-body">
          <BadgedItems items={data.allOpenSourceJson.nodes} />
        </div>
      </ExpandableCard>
    )}
  />
)
