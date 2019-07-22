import React from "react"
import ExpandableCard from "../ExpandableCard"
import BadgedItems from "../../BadgedItems"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allEducationJson {
          nodes {
            icon
            text
            badge
            urlKey
          }
        }
      }
    `}
    render={data => (
      <ExpandableCard
        icon="fas/graduation-cap"
        title="MSc in Computer Engineering"
        description={
          <>
            I also received the award dedicated to the{" "}
            <strong>30 best Engineering students</strong> in Bologna in 2016
          </>
        }
        buttonIcon="fas/award"
        buttonText={"Education & awards"}
        buttonClass="btn-primary"
        childBlockId="award-details"
      >
        <div className="card-body">
          <BadgedItems
            items={data.allEducationJson.nodes}
            badgeStyle="badge-primary"
          />
        </div>
      </ExpandableCard>
    )}
  />
)
