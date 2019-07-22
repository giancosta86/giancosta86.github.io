import React from "react"
import ExpandableCard from "../ExpandableCard"
import BadgedItems from "../../BadgedItems"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allOperatingSystemsJson {
          nodes {
            icon
            text
            badge
          }
        }
      }
    `}
    render={data => (
      <ExpandableCard
        icon="fab/ubuntu"
        title="Cross-platform"
        description={
          <>
            I work on both <b>Linux</b> and <b>Windows</b> - and I'm more and
            more focused on <strong>cross-platform</strong> technologies
          </>
        }
        buttonIcon="fas/cog"
        buttonText="Operating systems"
        buttonClass="btn-primary"
        childBlockId="cross-platform-details"
      >
        <div className="card-body">
          <BadgedItems
            items={data.allOperatingSystemsJson.nodes}
            badgeStyle="badge-primary"
          />
        </div>
      </ExpandableCard>
    )}
  />
)
